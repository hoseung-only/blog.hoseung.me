import styled from "styled-components";

import { useCategoryPosts } from "./hooks/useCategoryPosts";

import { Font } from "../../components/Font";
import { PostList, PostListPlaceholder } from "../../components/PostList";
import { Skeleton } from "../../components/Skeleton";

import { Color } from "../../constants/color";

export function Category() {
  const { category, posts, isLoading, loadingTriggerRef } = useCategoryPosts();
  return (
    <S.Container>
      <Font.Light className="title">{category.name}</Font.Light>
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

export function CategoryPlaceholder() {
  return (
    <S.Container>
      <Font.Light className="title">
        <Skeleton.Text style={{ width: 150 }} />
      </Font.Light>
      <PostListPlaceholder itemCount={12} />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px 0;

    box-sizing: border-box;

    > .title {
      padding: 16px;
      margin-bottom: 20px;

      box-sizing: border-box;

      box-shadow: inset 0 -2px 0 0 ${Color.Blue300};

      font-size: 2.4rem;
      color: ${Color.Blue300};
    }
  `,
};
