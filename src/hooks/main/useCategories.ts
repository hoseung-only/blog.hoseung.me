import { useMemo } from "react";

import { useAPIQuery } from "../common/useAPIQuery";

export function useCategories() {
  const categories = useAPIQuery("getAllCategories", { count: 12 }, { suspense: true }).data.data;
  return useMemo(() => categories.sort((a, b) => (a.name > b.name ? 1 : -1)), [categories]);
}
