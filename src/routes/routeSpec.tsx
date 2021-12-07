import { ComponentType } from "react";
import { RouteComponentProps } from "react-router";

import { Home, HomePlaceholder } from "../containers/main/Home";
import { PostShow, PostShowPlaceholder } from "../containers/post/PostShow";
import { Category, CategoryPlaceholder } from "../containers/post/CategoryPostList";
import { Search, SearchPlaceholder } from "../containers/search/Search";

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
    component: Home,
    placeholder: HomePlaceholder,
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
  {
    path: "/search/:query?",
    exact: true,
    component: Search,
    placeholder: SearchPlaceholder,
  },
];
