import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { routes, RouteSpec } from "./routeSpec";

export function RouteSwitch() {
  return (
    <Switch>
      {routes.map((routeSpec) => (
        <ResponsiveRoute key={routeSpec.name} {...routeSpec} />
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
