import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import styled from "styled-components";

import { Models } from "@hoseung-only/blog-api-client";

import { Header } from "../../components/post/Header";
import { Markdown } from "../../components/post/Markdown";
import { ResponsiveBlock } from "../../components/common/ResponsiveBlock";

import { Media } from "../../constants/media";

import { client } from "../../apiClient";

import { Cache } from "../../cache";

interface PostShowProps {
  post: Models.PostShow;
}

export default function PostShow({ post }: PostShowProps) {
  return (
    <S.Container>
      <Header title={post.title} createdAt={post.createdAt} viewCount={post.viewCount} />
      {post.coverImageURL && (
        <ResponsiveBlock width={4} height={2}>
          <img className="cover-image" src={post.coverImageURL} alt="" />
        </ResponsiveBlock>
      )}
      <div className="content">
        <Markdown content={post.content} />
      </div>
    </S.Container>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{
    postId: string;
  }>
): Promise<GetStaticPropsResult<PostShowProps>> {
  const { postId } = context.params!;

  const params = { id: postId };
  const key = `getPost/${JSON.stringify(params)}`;
  const cached = Cache.get<Models.PostShow>(key);
  if (cached) {
    return {
      props: {
        post: cached,
      },
    };
  }

  const post = await client.getPost(params);
  Cache.set(key, post);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 40px 0;

    ${Media.Desktop} {
      padding-left: 25%;
      padding-right: 25%;
    }

    box-sizing: border-box;

    > ${ResponsiveBlock} {
      margin-bottom: 40px;

      > .content {
        > .cover-image {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
      }
    }

    > .content {
      width: 100%;
    }
  `,
};
