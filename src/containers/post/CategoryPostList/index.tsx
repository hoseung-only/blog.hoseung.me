import styled from "styled-components";

import { useCategoryPosts } from "../../../hooks/post/useCategoryPosts";

import { Font } from "../../../components/common/Font";
import { PostList, PostListPlaceholder } from "../../../components/common/PostList";
import { Skeleton } from "../../../components/common/Skeleton";

import { Color } from "../../../constants/color";

export function Category() {
  const { category, posts, isLoading, loadingTriggerRef } = useCategoryPosts();
  return (
    <S.Container>
      <Font.Medium className="title">{category.name}</Font.Medium>
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
