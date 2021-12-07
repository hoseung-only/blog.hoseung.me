import { useCallback, ChangeEventHandler } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";

import { Color } from "../../../constants/color";

import { useSearchQueryForm } from "../../../hooks/search/useSearchQueryForm";

import { Empty } from "../../../components/search/Empty";
import { Result } from "../../../components/search/Result";

interface SearchPathParams {
  query?: string;
}

export function Search(props: RouteComponentProps<SearchPathParams>) {
  const initialQuery = props.match.params.query ? decodeURIComponent(props.match.params.query) : undefined;

  const { query, setQuery, handleSubmit } = useSearchQueryForm(initialQuery);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => setQuery(e.target.value), [setQuery]);

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <input className="search-query-form" value={query} onChange={handleChange} />
      </form>
      {initialQuery ? <Result query={initialQuery} /> : <Empty text="검색어를 입력해주세요 🧐" />}
    </S.Container>
  );
}

export function SearchPlaceholder() {
  return <S.Container></S.Container>;
}

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    > form {
      width: 400px;

      > .search-query-form {
        width: 100%;

        padding: 12px;
        margin-bottom: 40px;

        box-sizing: border-box;

        background-color: ${Color.Grey10};

        border: 2px solid ${Color.Blue100};

        border-radius: 2px;

        outline: none;

        font-size: 2rem;
      }
    }
  `,
};
