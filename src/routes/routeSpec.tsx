import { ComponentType } from "react";
import { RouteComponentProps } from "react-router";

import { Main, MainPlaceholder } from "../containers/Main";
import { PostShow, PostShowPlaceholder } from "../containers/PostShow";
import { Category, CategoryPlaceholder } from "../containers/Category";

type PageName = "Main" | "PostShow" | "Category";

export interface RouteSpec {
  name: PageName;
  path: string | string[];
  exact?: boolean;
  component: ComponentType<any> | ComponentType<RouteComponentProps<any, any, any>>;
  placeholder?: ComponentType<any>;
}

export const routes: RouteSpec[] = [
  {
    name: "Main",
    path: ["/", "/categories"],
    exact: true,
    component: Main,
    placeholder: MainPlaceholder,
  },
  {
    name: "PostShow",
    path: "/posts/:postId",
    exact: true,
    component: PostShow,
    placeholder: PostShowPlaceholder,
  },
  {
    name: "Category",
    path: "/categories/:categoryId/posts",
    exact: true,
    component: Category,
    placeholder: CategoryPlaceholder,
  },
];
