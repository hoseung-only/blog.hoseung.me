import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { useScrollToTop } from "../hooks/common/useScrollToTop";

import { routes, RouteSpec } from "./routeSpec";

export function RouteSwitch() {
  useScrollToTop();
  return (
    <Switch>
      {routes.map((routeSpec, index) => (
        <ResponsiveRoute key={index} {...routeSpec} />
      ))}
    </Switch>
  );
}

function ResponsiveRoute({ path, exact, component: Component, placeholder: Placeholder }: RouteSpec) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(match) => {
        return (
          <Suspense fallback={Placeholder ? <Placeholder /> : null}>
            <Component {...match} />
          </Suspense>
        );
      }}
    />
  );
}
