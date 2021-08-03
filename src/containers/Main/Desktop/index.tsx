import styled from "styled-components";
import { PostList } from "../../../components/Desktop/PostList";

import { usePosts } from "../hooks/usePosts";

export function Main() {
  const { posts, loadingTriggerRef } = usePosts();

  return (
    <S.Container>
      <PostList posts={posts} />
      <div ref={loadingTriggerRef} />
    </S.Container>
  );
}

export function MainPlaceholder() {
  return <S.Container></S.Container>;
}

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 40px 0;

    box-sizing: border-box;
  `,
};
