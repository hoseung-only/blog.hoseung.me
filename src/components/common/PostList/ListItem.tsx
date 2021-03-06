import dayjs from "dayjs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Models } from "@hoseung-only/blog-api-client";

import { ReactComponent as FallbackImage } from "../../../images/common/fallback-image.svg";

import { FadeImage } from "./FadeImage";
import { ResponsiveBlock } from "../ResponsiveBlock";
import { Font } from "../Font";
import { Skeleton } from "../Skeleton";

import { Color } from "../../../constants/color";
import { Media } from "../../../constants/media";

export function PostListItem({ post }: { post: Models.Post }) {
  return (
    <S.Container to={`/posts/${post.id}`}>
      {post.coverImageURL ? (
        <FadeImage src={post.coverImageURL} alt="" />
      ) : (
        <ResponsiveBlock className="fallback-image-container" width={4} height={3}>
          <FallbackImage />
        </ResponsiveBlock>
      )}
      <div className="information">
        <Font.Bold className="title">{post.title}</Font.Bold>
        <Font.Light className="summary">{post.summary}</Font.Light>
        <Font.Light className="created-at">{dayjs(post.createdAt).format("YYYY.MM.DD")}</Font.Light>
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
        <Font.Bold className="title">
          <Skeleton.Text />
        </Font.Bold>
        <Font.Light className="summary">
          <Skeleton.Text />
        </Font.Light>
        <Font.Light className="created-at">
          <Skeleton.Text />
        </Font.Light>
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

    transform: translateY(0);

    > ${ResponsiveBlock} {
      border-radius: 10px;

      overflow: hidden;

      > .content {
        width: 100%;
        height: 100%;
      }
    }

    > .fallback-image-container > .content {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${Color.Blue100};

      > svg {
        width: 30%;
      }
    }

    > .information {
      flex: 1;

      width: 100%;

      display: flex;
      flex-direction: column;

      padding: 10px;

      box-sizing: border-box;

      > * {
        word-break: break-word;
      }

      > .title {
        margin-bottom: 6px;

        font-size: 2rem;

        > ${Skeleton.Text} {
          width: 100px;
        }
      }

      > .summary {
        margin-bottom: 18px;

        font-size: 1.4rem;
        color: ${Color.Black50};

        > ${Skeleton.Text} {
          width: 200px;
        }
      }

      > .created-at {
        margin-top: auto;

        font-size: 1.2rem;
        color: ${Color.Grey400};

        > ${Skeleton.Text} {
          width: 70px;
        }
      }
    }

    ${Media.Desktop} {
      &:hover {
        > .fallback-image-container > .content {
          transform: scale(1.1);
        }
      }

      > .fallback-image-container > .content {
        transition: transform 0.2s;
      }
    }

    ${Media.Tablet} {
      > .information {
        > .title {
          font-size: 2rem;

          > ${Skeleton.Text} {
            width: 100px;
          }
        }

        > .summary {
          font-size: 1.4rem;
          color: ${Color.Black50};

          > ${Skeleton.Text} {
            width: 150px;
          }
        }

        > .created-at {
          font-size: 1.2rem;
          color: ${Color.Grey400};

          > ${Skeleton.Text} {
            width: 70px;
          }
        }
      }
    }

    ${Media.Mobile} {
      > .information {
        > .title {
          font-size: 2.2rem;

          > ${Skeleton.Text} {
            width: 100px;
          }
        }

        > .summary {
          font-size: 1.8rem;
          color: ${Color.Black50};

          > ${Skeleton.Text} {
            width: 120px;
          }
        }

        > .created-at {
          font-size: 1.5rem;
          color: ${Color.Grey400};

          > ${Skeleton.Text} {
            width: 70px;
          }
        }
      }
    }
  `,
};
