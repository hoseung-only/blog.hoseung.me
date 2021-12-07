import styled from "styled-components";

import { useSearchPosts } from "../../hooks/search/useSearchPosts";

import { PostList, PostListPlaceholder } from "../common/PostList";
import { withPlaceholder } from "../common/withPlaceholder";
import { Empty } from "./Empty";

interface ResultProps {
  query: string;
}

export const Result = withPlaceholder(
  ({ query }: ResultProps) => {
    const { posts, isLoading, loadingTriggerRef } = useSearchPosts(query);
    if (!isLoading && posts.length === 0) {
      return <Empty text="검색 결과가 없어요 😭" />;
    }
    return (
      <S.Container>
        <PostList posts={posts} />
        {isLoading && (
          <>
            <div style={{ marginTop: 20 }} />
            <PostListPlaceholder itemCount={12} />
          </>
        )}
        <div ref={loadingTriggerRef} />
      </S.Container>
    );
  },
  () => <PostListPlaceholder itemCount={12} />
);

const S = {
  Container: styled.div`
    width: 100%;
  `,
};
