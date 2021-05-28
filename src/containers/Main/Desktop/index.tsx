import styled from "styled-components";

import { usePosts } from "../hooks/usePosts";

export function Main() {
  const { posts, loadingTriggerElement } = usePosts();

  return (
    <S.Container>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
      {loadingTriggerElement}
    </S.Container>
  );
}

export function MainPlaceholder() {
  return <S.Container></S.Container>;
}

const S = {
  Container: styled.div``,
};
