import dayjs from "dayjs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Models } from "@hoseung-only/blog-api-client";

import { Label } from "../../Shared/Label";
import { ResponsiveBlock } from "../../Shared/ResponsiveBlock";
import { Skeleton } from "../../Shared/Skeleton";

import { Color } from "../../../constants/color";

export function PostListItem({ post }: { post: Models.PostShow }) {
  return (
    <S.Container to={`/posts/${post.id}`}>
      <ResponsiveBlock width={4} height={3}>
        <img className="image" src={post.coverImageURL} alt="" />
      </ResponsiveBlock>
      <div className="information">
        <Label.B20 className="title">{post.title}</Label.B20>
        <Label.R14 className="summary">{post.summary}</Label.R14>
        <Label.R12 className="created-at">{dayjs(post.createdAt).format("YYYY.MM.DD")}</Label.R12>
      </div>
    </S.Container>
  );
}

export function PostListItemPlaceholder() {
  return (
    <S.Container as="div">
      <ResponsiveBlock width={4} height={3}>
        <Skeleton.Rect style={{ width: "100%", height: "100%" }} />
      </ResponsiveBlock>
      <div className="information">
        <Label.B20 className="title">
          <Skeleton.Text style={{ width: 100 }} />
        </Label.B20>
        <Label.R14 className="summary">
          <Skeleton.Text style={{ width: 120 }} />
        </Label.R14>
        <Label.R12 className="created-at">
          <Skeleton.Text style={{ width: 70 }} />
        </Label.R12>
      </div>
    </S.Container>
  );
}

const S = {
  Container: styled(Link)`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    > ${ResponsiveBlock} > .content {
      width: 100%;
      height: 100%;

      border-radius: 10px;

      overflow: hidden;

      > .image {
        width: 100%;
        height: 100%;

        margin-right: 10px;

        object-fit: cover;
      }
    }

    > .information {
      flex: 1;

      width: 100%;

      display: flex;
      flex-direction: column;

      padding: 10px;

      box-sizing: border-box;

      > .title {
        margin-bottom: 6px;
      }

      > .summary {
        margin-bottom: 18px;

        color: ${Color.Black50};
      }

      > .created-at {
        margin-top: auto;

        color: ${Color.Grey400};
      }
    }
  `,
};
