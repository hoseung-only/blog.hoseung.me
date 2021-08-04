import dayjs from "dayjs";
import styled from "styled-components";
import { Models } from "@hoseung-only/blog-api-client";

import { Label } from "../../../components/Shared/Label";
import { ResponsiveBlock } from "../../../components/Shared/ResponsiveBlock";
import { Markdown } from "../../../components/Shared/Markdown";

import { Color } from "../../../constants/color";
import { Skeleton } from "../../../components/Shared/Skeleton";

export function PostShow({ post }: { post: Models.PostShow }) {
  return (
    <S.Container>
      <header>
        <Label.B36 className="title">{post.title}</Label.B36>
        <Label.R14 className="created-at">{dayjs(post.createdAt).format("YYYY.MM.DD")}</Label.R14>
      </header>
      <ResponsiveBlock width={1} height={1}>
        <img className="cover-image" src={post.coverImageURL} alt="" />
      </ResponsiveBlock>
      <div className="content">
        <Markdown content={post.content} />
      </div>
    </S.Container>
  );
}

export function PostShowPlaceholder() {
  return (
    <S.Container>
      <header>
        <Label.B36 className="title">
          <Skeleton.Text style={{ width: 200 }} />
        </Label.B36>
        <Label.R14 className="created-at">
          <Skeleton.Text style={{ width: 80 }} />
        </Label.R14>
      </header>
      <ResponsiveBlock width={1} height={1}>
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

    box-sizing: border-box;

    > header {
      width: 100%;

      padding-bottom: 20px;
      margin-bottom: 40px;

      box-sizing: border-box;

      border-bottom: 1px solid ${Color.Grey100};

      > .title {
        margin-bottom: 12px;
      }

      > .created-at {
        color: ${Color.Grey400};
      }
    }

    > ${ResponsiveBlock} > .content {
      > .cover-image {
        width: 100%;
        height: 100%;

        object-fit: contain;
      }
    }

    > .content {
      width: 100%;

      margin-top: 40px;
    }
  `,
};
