import { useState, useCallback, FormEventHandler } from "react";

import { debounce } from "../../helpers/common/debounce";
import { history } from "../../helpers/common/history";

function pushQueryToHistory(query: string) {
  if (query.length === 0) {
    history.push("/search");
  } else {
    history.push(`/search/${encodeURIComponent(query)}`);
  }
}

const queryDebounce = debounce(pushQueryToHistory, 1000);

export function useSearchQueryForm(initialQuery?: string) {
  const [query, _setQuery] = useState(initialQuery ?? "");

  const setQuery = useCallback((value: string) => {
    _setQuery(value);
    queryDebounce(value);
  }, []);

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault();
    queryDebounce.flush();
  }, []);

  return {
    query,
    setQuery,
    handleSubmit,
  };
}
