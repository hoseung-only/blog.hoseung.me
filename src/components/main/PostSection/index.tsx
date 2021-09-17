import styled from "styled-components";

import { Models } from "@hoseung-only/blog-api-client";

import { PostList } from "../../common/PostList";

export interface PostSectionProps {
  posts: Models.PostListShow["data"];
  nextCursor: number | null;
}

export function PostSection({ posts }: PostSectionProps) {
  // const { posts, isLoading, loadingTriggerRef } = usePosts();
  return (
    <S.Container>
      <PostList posts={posts} />
      {/* {isLoading && (
        <>
          <div style={{ marginTop: 20 }} />
          <PostListPlaceholder itemCount={12} />
        </>
      )}
      <div ref={loadingTriggerRef} /> */}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
  `,
};
