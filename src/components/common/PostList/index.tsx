import _ from "lodash";
import styled from "styled-components";
import { Models } from "@hoseung-only/blog-api-client";

import { PostListItem, PostListItemPlaceholder } from "./ListItem";

import { Media } from "../../../constants/media";

export function PostList({ posts }: { posts: Models.Post[] }) {
  return (
    <S.Grid>
      {posts.map((post) => (
        <S.GridItem key={post.id}>
          <PostListItem post={post} />
        </S.GridItem>
      ))}
    </S.Grid>
  );
}

export function PostListPlaceholder({ itemCount }: { itemCount: number }) {
  return (
    <S.Grid>
      {_.times(itemCount, (index) => (
        <S.GridItem key={index}>
          <PostListItemPlaceholder />
        </S.GridItem>
      ))}
    </S.Grid>
  );
}

const S = {
  Grid: styled.ul`
    width: 100%;

    display: flex;
    flex-flow: row wrap;
  `,
  GridItem: styled.li`
    ${Media.Desktop} {
      width: calc((100% - (30px * 3)) / 4);

      margin-right: 30px;
      margin-bottom: 30px;

      &:nth-child(4n) {
        margin-right: 0;
      }

      &:nth-last-child(-n + 4):nth-child(4n + 1) {
        margin-bottom: 0;
      }

      &:nth-last-child(-n + 4):nth-child(4n + 1) ~ & {
        margin-bottom: 0;
      }
    }

    ${Media.Tablet} {
      width: calc((100% - (20px * 2)) / 3);

      margin-right: 20px;
      margin-bottom: 20px;

      &:nth-child(3n) {
        margin-right: 0;
      }

      &:nth-last-child(-n + 3):nth-child(3n + 1) {
        margin-bottom: 0;
      }

      &:nth-last-child(-n + 3):nth-child(3n + 1) ~ & {
        margin-bottom: 0;
      }
    }

    ${Media.Mobile} {
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  `,
};
