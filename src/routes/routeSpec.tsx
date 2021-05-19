import _ from "lodash";
import { ComponentType } from "react";
import { RouteComponentProps } from "react-router";

import { Main, MainPlaceholder } from "../containers/Main";

type PageName = "Main" | "PostShow";

export interface RouteSpec {
  name: PageName;
  path: string;
  exact?: boolean;
  component: ComponentType<any> | ComponentType<RouteComponentProps<any, any, any>>;
  placeholder?: ComponentType<any>;
}

export const routes: RouteSpec[] = [
  {
    name: "Main",
    path: "/",
    exact: true,
    component: Main,
    placeholder: MainPlaceholder,
  },
];

export const Paths = _.chain(routes)
  .map(({ name, path }) => [name, path] as const)
  .fromPairs()
  .value() as { [key in typeof routes[number]["name"]]: string };
