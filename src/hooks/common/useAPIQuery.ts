import { useMemo, useState } from "react";
import useSWR, { SWRConfiguration, useSWRInfinite, SWRInfiniteConfiguration, SWRResponse } from "swr";
import { Client } from "@hoseung-only/blog-api-client";

import { useAPIClient } from "../../contexts/APIClient";

type OperationId = keyof Client;
type OperationParameters<O extends OperationId> = Parameters<Client[O]>[0];
type OperationResult<O extends OperationId> = ReturnType<Client[O]> extends Promise<infer R> ? R : never;

type QueryResult<O extends OperationId, C> = C extends { suspense: true }
  ? {
      data: OperationResult<O>;
      mutate: SWRResponse<OperationResult<O>, any>["mutate"];
    }
  : {
      data?: OperationResult<O>;
      mutate: SWRResponse<OperationResult<O>, any>["mutate"];
    };

type InfiniteQueryResult<O extends OperationId> = {
  data: OperationResult<O> extends { data: infer R } ? R : never;
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
    mutate: result.mutate,
  } as QueryResult<O, C>;
}

type PaginatedOperationId = {
  [K in OperationId]: OperationResult<K> extends { nextCursor: number | null } ? K : never;
}[OperationId];

export function usePaginatedAPIQuery<O extends PaginatedOperationId, C extends SWRInfiniteConfiguration>(
  operationId: O,
  params: Omit<OperationParameters<O>, "cursor">,
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
    async (cursor: number) => {
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
