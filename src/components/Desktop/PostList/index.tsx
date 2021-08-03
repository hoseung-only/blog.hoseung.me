import _ from "lodash";
import { Models } from "@hoseung-only/blog-api-client";

import { PostListItem, PostListItemPlaceholder } from "./ListItem";
import { Grid, GridItem } from "../../Shared/Grid";

export function PostList({ posts }: { posts: Models.PostShow[] }) {
  return (
    <Grid columnSize={3} columnMargin={30} rowMargin={30}>
      {posts.map((post) => (
        <GridItem key={post.id}>
          <PostListItem post={post} />
        </GridItem>
      ))}
    </Grid>
  );
}

export function PostListPlaceholder({ itemCount }: { itemCount: number }) {
  return (
    <Grid columnSize={3} columnMargin={30} rowMargin={30}>
      {_.times(itemCount, (index) => (
        <GridItem key={index}>
          <PostListItemPlaceholder />
        </GridItem>
      ))}
    </Grid>
  );
}
