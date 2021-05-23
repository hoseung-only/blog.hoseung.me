import { useAPIPaginatedQuery, useAPIQuery } from "../../../hooks/useAPIQuery";

export function usePosts() {
  const { data } = useAPIPaginatedQuery("getPostsByCursor", {});
}
