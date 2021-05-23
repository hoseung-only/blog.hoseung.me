import { useMemo, useState } from "react";
import useSWR, { SWRConfiguration, useSWRInfinite, SWRInfiniteConfiguration } from "swr";
import { Client } from "@hoseung-only/blog-api-client";

import { useAPIClient } from "../contexts/APIClient";

type OperationId = keyof Client;
type OperationParameters<O extends OperationId> = Parameters<Client[O]>[0];
type OperationResult<O extends OperationId> = ReturnType<Client[O]> extends Promise<infer R> ? R : unknown;

type QueryResult<O extends OperationId, C> = C extends { suspense: true }
  ? {
      data: OperationResult<O>;
    }
  : {
      data?: OperationResult<O>;
    };

type InfiniteQueryResult<O extends OperationId> = {
  data: OperationResult<O> extends { data: infer R } ? R : unknown;
  loadMore: (() => void) | null;
  isLoading: boolean;
  canLoadMore: boolean;
};

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
  } as QueryResult<O, C>;
}

export function usePaginatedAPIQuery<O extends OperationId, C extends SWRInfiniteConfiguration>(
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

  const data = useMemo(() => result.data?.flatMap(({ data }: any) => data) ?? [], [result]);

  const loadMore = useMemo(() => {
    return canLoadMore && !result.isValidating
      ? () => {
          result.setSize((size) => size + 1);
        }
      : null;
  }, [canLoadMore, result]);

  return {
    data,
    loadMore,
    isLoading: result.isValidating,
    canLoadMore,
  } as InfiniteQueryResult<O>;
}
