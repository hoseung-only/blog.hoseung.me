import styled from "styled-components";

import { usePosts } from "../hooks/usePosts";

export function Main() {
  const { posts, loadingTriggerRef } = usePosts();

  return (
    <S.Container>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
      <div ref={loadingTriggerRef} />
    </S.Container>
  );
}

export function MainPlaceholder() {
  return <S.Container></S.Container>;
}

const S = {
  Container: styled.div``,
};
