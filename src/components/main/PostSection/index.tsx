import styled from "styled-components";

import { PostList, PostListPlaceholder } from "../../common/PostList";

import { usePosts } from "../../../hooks/main/usePosts";

export function PostSection() {
  const { posts, isLoading, loadingTriggerRef } = usePosts();
  return (
    <S.Container>
      <PostList posts={posts} />
      {isLoading && (
        <>
          <div style={{ marginTop: 20 }} />
          <PostListPlaceholder itemCount={12} />
        </>
      )}
      <div ref={loadingTriggerRef} />
    </S.Container>
  );
}

export function PostSectionPlaceholder() {
  return (
    <S.Container>
      <PostListPlaceholder itemCount={12} />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
  `,
};
