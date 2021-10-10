import { useAPIQuery } from "../common/useAPIQuery";

export function useCategories() {
  return useAPIQuery("getAllCategories", { count: 12 }, { suspense: true }).data.data;
}
