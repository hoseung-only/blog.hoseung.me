import { useEffect } from "react";
import { useParams } from "react-router";
import { useInView } from "react-intersection-observer";

import { usePaginatedAPIQuery } from "../../../hooks/useAPIQuery";

export function useCategoryPosts() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data, loadMore, isLoading, canLoadMore } = usePaginatedAPIQuery(
    "getCategoryPostsByCursor",
    { id: categoryId, count: 12 },
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
