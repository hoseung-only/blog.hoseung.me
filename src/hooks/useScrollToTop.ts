import { useEffect } from "react";
import { useHistory } from "react-router";

export function useScrollToTop() {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      if (history.action !== "POP") {
        window.scrollTo({ top: 0 });
      }
    });
  }, [history]);
}
