import { useEffect } from "react";
import { useHistory } from "react-router";

const disallowedPaths = new Set(["/", "/categories"]);

export function useScrollToTop() {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      if (history.action !== "POP" && !disallowedPaths.has(window.location.pathname)) {
        window.scrollTo({ top: 0 });
      }
    });
  }, [history]);
}
