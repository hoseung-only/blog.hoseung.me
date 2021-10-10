import { useCallback, useEffect } from "react";

import { useAPIQuery } from "../common/useAPIQuery";

import { useAPIClient } from "../../contexts/APIClient";

export function usePost(postId: string) {
  const { data: post, mutate } = useAPIQuery("getPost", { id: postId }, { suspense: true });
  const client = useAPIClient();

  const increaseViewCount = useCallback(async () => {
    try {
      const isSucceeded = (await client.increasePostViewCount({ id: postId })).success;
      if (isSucceeded) {
        mutate((data) => {
          if (data) {
            return {
              ...data,
              viewCount: data.viewCount + 1,
            };
          }
        }, false);
      }
    } catch (error) {}
  }, [postId, client, mutate]);

  useEffect(() => {
    increaseViewCount();
  }, [increaseViewCount]);

  return post;
}
