import { NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { Label } from "../../../components/Shared/Label";
import { withPlaceholder } from "../../../components/Shared/withPlaceholder";
import { Color } from "../../../constants/color";

import { CategorySection, CategorySectionPlaceholder } from "./CategorySection";
import { PostSection, PostSectionPlaceholder } from "./PostSection";

const tabs = [
  {
    label: "최신 글",
    to: "/",
    component: PostSection,
    placeholder: PostSectionPlaceholder,
  },
  {
    label: "카테고리",
    to: "/categories",
    component: CategorySection,
    placeholder: CategorySectionPlaceholder,
  },
];

export function Main() {
  return (
    <S.Container>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li key={index}>
            <NavLink className="link" activeClassName="current" to={tab.to} exact>
              <Label.R20>{tab.label}</Label.R20>
            </NavLink>
          </li>
        ))}
        <div
          className="current-tab-indicator"
          style={{
            transform: `translateX(calc(100% * ${tabs.findIndex((tab) => tab.to === window.location.pathname)})`,
          }}
        />
      </ul>
      <Switch>
        {tabs.map((tab, index) => (
          <Route key={index} path={tab.to} exact component={withPlaceholder(tab.component, tab.placeholder)} />
        ))}
      </Switch>
    </S.Container>
  );
}

export function MainPlaceholder() {
  return (
    <S.Container>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li key={index}>
            <NavLink className="link" activeClassName="current" to={tab.to} exact>
              <Label.R20>{tab.label}</Label.R20>
            </NavLink>
          </li>
        ))}
        <div
          className="current-tab-indicator"
          style={{
            transform: `translateX(calc(100% * ${tabs.findIndex((tab) => tab.to === window.location.pathname)})`,
          }}
        />
      </ul>
      <Switch>
        {tabs.map((tab, index) => (
          <Route key={index} path={tab.to} exact component={tab.placeholder} />
        ))}
      </Switch>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px 0;

    box-sizing: border-box;

    > .tabs {
      position: relative;

      display: flex;

      margin-bottom: 20px;

      box-shadow: inset 0 -1px 0 0 ${Color.Blue100};

      > .current-tab-indicator {
        position: absolute;

        left: 0;
        right: 0;
        bottom: 0;

        width: 120px;
        height: 2px;

        background-color: ${Color.Blue300};

        transition: transform 0.3s;
      }

      > li {
        width: 120px;

        display: flex;

        > .link {
          width: 100%;

          padding: 16px 0;

          box-sizing: border-box;

          color: ${Color.Blue100};
          text-align: center;

          transition: color 0.2s, box-shadow 0.2s;

          &:hover {
            color: ${Color.Blue200};
          }

          &.current {
            color: ${Color.Blue300};
          }
        }
      }
    }
  `,
};
