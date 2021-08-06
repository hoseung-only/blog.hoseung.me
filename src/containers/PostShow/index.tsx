import { useParams } from "react-router";
import styled from "styled-components";

import { useAPIQuery } from "../../hooks/useAPIQuery";

import { Header, HeaderPlaceholder } from "./components/Header";
import { ResponsiveBlock } from "../../components/ResponsiveBlock";
import { Markdown } from "../../components/Markdown";
import { Skeleton } from "../../components/Skeleton";

import { Media } from "../../constants/media";

export function PostShow() {
  const { postId } = useParams<{ postId: string }>();
  const post = useAPIQuery("getPost", { id: postId }, { suspense: true }).data;
  return (
    <S.Container>
      <Header title={post.title} createdAt={post.createdAt} />
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
