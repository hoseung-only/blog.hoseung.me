import { useMemo, useState } from "react";
import useSWR, { SWRConfiguration, SWRResponse, useSWRInfinite, SWRInfiniteConfiguration } from "swr";
import { Client } from "@hoseung-only/blog-api-client";

import { useAPIClient } from "../contexts/APIClient";

type OperationId = keyof Client;
type OperationParameters<O extends OperationId> = Parameters<Client[O]>[0];
type OperationResult<O extends OperationId> = ReturnType<Client[O]> extends Promise<infer R> ? R : unknown;

type QueryResult<O extends OperationId, C> = C extends { suspense: true }
  ? {
      data: OperationResult<O>;
      mutate: SWRResponse<OperationResult<O>, any>["mutate"];
      refetch: SWRResponse<OperationResult<O>, any>["revalidate"];
    }
  : {
      data?: OperationResult<O>;
      mutate: SWRResponse<OperationResult<O>, any>["mutate"];
      refetch: SWRResponse<OperationResult<O>, any>["revalidate"];
    };

type InfiniteQueryResult<O extends OperationId, C> = (C extends { suspense: true }
  ? {
      data: OperationResult<O> extends { data: infer R } ? R : unknown;
      mutate: SWRResponse<OperationResult<O>, any>["mutate"];
      refetch: SWRResponse<OperationResult<O>, any>["revalidate"];
    }
  : {
      data?: OperationResult<O> extends { data: infer R } ? R : unknown;
      mutate: SWRResponse<OperationResult<O>, any>["mutate"];
      refetch: SWRResponse<OperationResult<O>, any>["revalidate"];
    }) & { loadMore: (() => void) | null };

export function useAPIQuery<O extends OperationId, C extends SWRConfiguration>(
  operationId: O,
  params: OperationParameters<O>,
  options?: C
) {
  const client = useAPIClient();

  const result = useSWR<OperationResult<O>>(
    [operationId, JSON.stringify(params)],
    async () => {
      try {
        return (await client[operationId](params as any)) as any;
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
      }
    },
    options
  );

  return {
    data: result.data,
    mutate: result.mutate,
    refetch: result.revalidate,
  } as QueryResult<O, C>;
}

export function useAPIPaginatedQuery<O extends OperationId, C extends SWRInfiniteConfiguration>(
  operationId: O,
  params: OperationParameters<O>,
  options?: C
) {
  const client = useAPIClient();

  const [canLoadMore, setCanLoadMore] = useState(true);

  const result = useSWRInfinite<OperationResult<O>>(
    (_, previous) => {
      const next = (previous as any)?.nextCursor;
      if (previous && !next) {
        setCanLoadMore(false);
        return null;
      }
      return [next, operationId, JSON.stringify(params)];
    },
    async (cursor) => {
      try {
        return (await client[operationId]({
          cursor,
          ...params,
        } as any)) as any;
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
      }
    },
    options
  );

  const data = useMemo(() => result.data?.flatMap(({ data }: any) => data), [result]);

  const loadMore = useMemo(() => {
    return canLoadMore && !result.isValidating
      ? () => {
          result.setSize((size) => size + 1);
        }
      : null;
  }, [canLoadMore, result]);

  return {
    data,
    mutate: result.mutate,
    refetch: result.revalidate,
    loadMore,
  } as InfiniteQueryResult<O, C>;
}
