import { useParams } from "react-router";
import styled from "styled-components";

import { usePost } from "../../../hooks/post/usePost";

import { Header, HeaderPlaceholder } from "../../../components/post/Header";
import { ResponsiveBlock } from "../../../components/common/ResponsiveBlock";
import { Markdown } from "../../../components/post/Markdown";
import { Meta } from "../../../components/common/Meta";
import { Skeleton } from "../../../components/common/Skeleton";

import { Media } from "../../../constants/media";

export function PostShow() {
  const { postId } = useParams<{ postId: string }>();
  const post = usePost(postId);

  return (
    <>
      <Meta
        title={`${post.title} | 장호승 개발 블로그`}
        description={post.summary}
        url={`https://blog.hoseung.me/posts/${post.id}`}
        image={post.coverImageURL}
      />
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
    </>
  );
}

export function PostShowPlaceholder() {
  return (
    <S.Container>
      <HeaderPlaceholder />
      <ResponsiveBlock width={4} height={2}>
        <Skeleton.Rect style={{ width: "100%", height: "100%" }} />
      </ResponsiveBlock>
    </S.Container>
  );
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
