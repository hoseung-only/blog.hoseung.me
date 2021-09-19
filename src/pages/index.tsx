import { GetStaticPropsResult } from "next";
import styled from "styled-components";

import { Models } from "@hoseung-only/blog-api-client";

import { PostSection, PostSectionProps } from "../components/main/PostSection";
// import { CategorySection, CategorySectionPlaceholder } from "../components/main/CategorySection";

import { client } from "../apiClient";

import { Cache } from "../cache";

export default function Main(props: PostSectionProps) {
  return (
    <S.Container>
      <PostSection {...props} />
    </S.Container>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PostSectionProps>> {
  const params = { count: 12 };
  const key = `getPostByCursor/${JSON.stringify(params)}`;
  const cached = Cache.get<Models.PostListShow>(key);
  if (cached) {
    return {
      props: {
        posts: cached.data,
        nextCursor: cached.nextCursor,
      },
    };
  }

  const result = await client.getPostsByCursor(params);
  Cache.set(key, result);
  return {
    props: {
      posts: result.data,
      nextCursor: result.nextCursor,
    },
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
  `,
};
