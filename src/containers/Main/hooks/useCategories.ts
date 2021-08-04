import { useAPIQuery } from "../../../hooks/useAPIQuery";

export function usePosts() {
  return useAPIQuery("getAllCategories", { count: 12 }, { suspense: true }).data;
}
