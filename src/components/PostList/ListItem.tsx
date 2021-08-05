import dayjs from "dayjs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Models } from "@hoseung-only/blog-api-client";

import { ResponsiveBlock } from "../Shared/ResponsiveBlock";
import { Skeleton } from "../Shared/Skeleton";

import { Color } from "../../constants/color";
import { Media } from "../../constants/media";

export function PostListItem({ post }: { post: Models.PostShow }) {
  return (
    <S.Container to={`/posts/${post.id}`}>
      <ResponsiveBlock width={4} height={3}>
        <img className="image" src={post.coverImageURL} alt="" />
      </ResponsiveBlock>
      <div className="information">
        <div className="title">{post.title}</div>
        <div className="summary">{post.summary}</div>
        <div className="created-at">{dayjs(post.createdAt).format("YYYY.MM.DD")}</div>
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
        <div className="title">
          <Skeleton.Text className="skeleton" />
        </div>
        <div className="summary">
          <Skeleton.Text className="skeleton" />
        </div>
        <div className="created-at">
          <Skeleton.Text className="skeleton" />
        </div>
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

    &:hover {
      > ${ResponsiveBlock} > .content > .image {
        transform: scale(1.1);
      }
    }

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

        > .skeleton {
          width: 100px;
        }
      }

      > .summary {
        margin-bottom: 18px;

        font-size: 1.4rem;
        color: ${Color.Black50};

        > .skeleton {
          width: 200px;
        }
      }

      > .created-at {
        margin-top: auto;

        font-size: 1.2rem;
        color: ${Color.Grey400};

        > .skeleton {
          width: 70px;
        }
      }
    }

    ${Media.Tablet} {
      > .information {
        > .title {
          font-size: 2rem;

          > .skeleton {
            width: 100px;
          }
        }

        > .summary {
          font-size: 1.4rem;
          color: ${Color.Black50};

          > .skeleton {
            width: 150px;
          }
        }

        > .created-at {
          font-size: 1.2rem;
          color: ${Color.Grey400};

          > .skeleton {
            width: 70px;
          }
        }
      }
    }

    ${Media.Mobile} {
      > .information {
        > .title {
          font-size: 2rem;

          > .skeleton {
            width: 100px;
          }
        }

        > .summary {
          font-size: 1.4rem;
          color: ${Color.Black50};

          > .skeleton {
            width: 120px;
          }
        }

        > .created-at {
          font-size: 1.2rem;
          color: ${Color.Grey400};

          > .skeleton {
            width: 70px;
          }
        }
      }
    }
  `,
};
