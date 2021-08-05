import _ from "lodash";
import styled from "styled-components";
import { Models } from "@hoseung-only/blog-api-client";

import { PostListItem, PostListItemPlaceholder } from "./ListItem";
import { Media } from "../../constants/media";

export function PostList({ posts }: { posts: Models.PostShow[] }) {
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
    width: calc((100% - (30px * 3)) / 4);

    margin-right: 30px;
    margin-bottom: 30px;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-last-child(-n + 4):nth-child(4n) ~ & {
      margin-bottom: 0;
    }

    ${Media.Tablet} {
      width: calc((100% - (20px * 2)) / 3);

      margin-right: 20px;
      margin-bottom: 20px;
    }

    ${Media.Mobile} {
      width: calc((100% - 20px) / 2);

      margin-right: 10px;
      margin-bottom: 20px;
    }
  `,
};
