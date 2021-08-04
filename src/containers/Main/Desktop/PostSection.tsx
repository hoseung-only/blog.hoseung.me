import styled from "styled-components";

import { PostList, PostListPlaceholder } from "../../../components/Desktop/PostList";

import { usePosts } from "../hooks/usePosts";

export function PostSection() {
  const { posts, loadingTriggerRef } = usePosts();
  return (
    <S.Container>
      <PostList posts={posts} />
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
