import { ComponentType } from "react";
import { RouteComponentProps } from "react-router";

import { Main, MainPlaceholder } from "../containers/Main";
import { PostShow, PostShowPlaceholder } from "../containers/PostShow";
import { Category, CategoryPlaceholder } from "../containers/Category";

export interface RouteSpec {
  path: string | string[];
  exact?: boolean;
  component: ComponentType<any> | ComponentType<RouteComponentProps<any, any, any>>;
  placeholder?: ComponentType<any>;
}

export const routes: RouteSpec[] = [
  {
    path: ["/", "/categories"],
    exact: true,
    component: Main,
    placeholder: MainPlaceholder,
  },
  {
    path: "/posts/:postId",
    exact: true,
    component: PostShow,
    placeholder: PostShowPlaceholder,
  },
  {
    path: "/categories/:categoryId/posts",
    exact: true,
    component: Category,
    placeholder: CategoryPlaceholder,
  },
];
