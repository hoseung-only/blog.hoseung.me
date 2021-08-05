import dayjs from "dayjs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Models } from "@hoseung-only/blog-api-client";

import { ResponsiveBlock } from "../ResponsiveBlock";
import { Font } from "../Font";
import { Skeleton } from "../Skeleton";

import { Color } from "../../constants/color";
import { Media } from "../../constants/media";

export function PostListItem({ post }: { post: Models.PostShow }) {
  return (
    <S.Container to={`/posts/${post.id}`}>
      <ResponsiveBlock width={4} height={3}>
        <img className="image" src={post.coverImageURL} alt="" />
      </ResponsiveBlock>
      <div className="information">
        <Font.Bold className="title">{post.title}</Font.Bold>
        <Font.Regular className="summary">{post.summary}</Font.Regular>
        <Font.Regular className="created-at">{dayjs(post.createdAt).format("YYYY.MM.DD")}</Font.Regular>
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
        <Font.Regular className="summary">
          <Skeleton.Text />
        </Font.Regular>
        <Font.Regular className="created-at">
          <Skeleton.Text />
        </Font.Regular>
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

    > ${ResponsiveBlock} > .content {
      width: 100%;
      height: 100%;

      border-radius: 10px;

      overflow: hidden;

      > .image {
        width: 100%;
        height: 100%;

        object-fit: cover;

        transition: transform 0.25s;
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
        > ${ResponsiveBlock} > .content > .image {
          transform: scale(1.1);
        }
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
          font-size: 2rem;

          > ${Skeleton.Text} {
            width: 100px;
          }
        }

        > .summary {
          font-size: 1.4rem;
          color: ${Color.Black50};

          > ${Skeleton.Text} {
            width: 120px;
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
  `,
};
