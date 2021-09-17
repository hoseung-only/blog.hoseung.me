import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import styled from "styled-components";

import { Models } from "@hoseung-only/blog-api-client";

import { Font } from "../../../components/Font";
import { PostList } from "../../../components/post/PostList";

import { Color } from "../../../constants/color";

import { client } from "../../../apiClient";

import { Cache } from "../../../cache";

interface CategoryProps {
  category: Models.CategoryShow;
  posts: Models.PostListShow["data"];
}

export default function Category({ category, posts }: CategoryProps) {
  return (
    <S.Container>
      <Font.Light className="title">{category.name}</Font.Light>
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

export async function getStaticProps(
  context: GetStaticPropsContext<{ categoryId: string }>
): Promise<GetStaticPropsResult<CategoryProps>> {
  const { categoryId } = context.params!;

  const categoryParams = { id: categoryId };
  const postsParams = { id: categoryId, count: 12 };

  const categoryKey = `getCategory/${JSON.stringify(categoryParams)}`;
  const postsKey = `getCategoryPostsByCursor/${JSON.stringify(postsParams)}`;

  const cachedCategory = Cache.get<Models.CategoryShow>(categoryKey);
  const cachedPosts = Cache.get<Models.PostListShow>(postsKey);
  if (cachedCategory && cachedPosts) {
    return {
      props: {
        category: cachedCategory,
        posts: cachedPosts.data,
      },
    };
  }

  const categoryResult = await client.getCategory(categoryParams);
  const postsResult = await client.getCategoryPostsByCursor(postsParams);
  Cache.set(categoryKey, categoryResult);
  Cache.set(postsKey, postsResult);
  return {
    props: {
      category: categoryResult,
      posts: postsResult.data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
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
