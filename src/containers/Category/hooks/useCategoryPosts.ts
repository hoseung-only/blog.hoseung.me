import { useEffect } from "react";
import { useParams } from "react-router";
import { useInView } from "react-intersection-observer";

import { useAPIQuery, usePaginatedAPIQuery } from "../../../hooks/useAPIQuery";

export function useCategoryPosts() {
  const { categoryId } = useParams<{ categoryId: string }>();

  const category = useAPIQuery("getCategory", { id: categoryId }, { suspense: true }).data;

  const {
    data: posts,
    loadMore,
    isLoading,
    canLoadMore,
  } = usePaginatedAPIQuery("getCategoryPostsByCursor", { id: categoryId, count: 12 }, { suspense: true });

  const { ref, inView } = useInView({ initialInView: false });

  useEffect(() => {
    if (inView) {
      loadMore?.();
    }
  }, [loadMore, inView]);

  return {
    category,
    posts,
    loadMore,
    isLoading,
    canLoadMore,
    loadingTriggerRef: loadMore !== null ? ref : null,
  };
}
