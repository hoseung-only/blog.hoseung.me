import { useCallback, useEffect } from "react";

import { useAPIQuery } from "../common/useAPIQuery";

import { useAPIClient } from "../../contexts/APIClient";
import { useUserId } from "../../contexts/UserId";

export function usePost(postId: string) {
  const { data: post, mutate } = useAPIQuery("getPost", { id: postId }, { suspense: true });
  const client = useAPIClient();
  const userId = useUserId();

  const increaseViewCount = useCallback(async () => {
    if (!userId) {
      return;
    }
    try {
      const isSucceeded = (await client.increasePostViewCount({ id: postId, userId })).success;
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
  }, [postId, userId, client, mutate]);

  useEffect(() => {
    increaseViewCount();
  }, [increaseViewCount]);

  return post;
}
