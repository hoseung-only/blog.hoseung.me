import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { usePaginatedAPIQuery } from "../../../hooks/useAPIQuery";

export function usePosts() {
  const { data, loadMore, isLoading, canLoadMore } = usePaginatedAPIQuery(
    "getPostsByCursor",
    { count: 12 },
    { suspense: true }
  );

  const { ref, inView } = useInView({ initialInView: false });

  useEffect(() => {
    if (inView) {
      loadMore?.();
    }
  }, [loadMore, inView]);

  return {
    posts: data,
    loadMore,
    isLoading,
    canLoadMore,
    loadingTriggerRef: loadMore !== null ? ref : null,
  };
}
