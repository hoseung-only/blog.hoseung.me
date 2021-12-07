import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { usePaginatedAPIQuery } from "../common/useAPIQuery";

export function useSearchPosts(query: string) {
  const { data, isLoading, loadMore } = usePaginatedAPIQuery("searchPosts", { query, count: 12 }, { suspense: true });

  const { ref, inView } = useInView({ initialInView: false });

  useEffect(() => {
    if (inView) {
      loadMore?.();
    }
  }, [loadMore, inView]);

  return {
    posts: data,
    isLoading,
    loadingTriggerRef: loadMore !== null ? ref : null,
  };
}
