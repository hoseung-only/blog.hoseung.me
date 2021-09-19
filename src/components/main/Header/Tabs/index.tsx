import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import { Font } from "../../../common/Font";
import { PostSection, PostSectionProps } from "../../PostSection";
// import { CategorySection, CategorySectionPlaceholder } from "../components/main/CategorySection";

import { Color } from "../../../../constants/color";
import { Media } from "../../../../constants/media";

interface Tab {
  path: string;
  label: string;
}

const tabs: Tab[] = [
  { path: "/", label: "최신 글" },
  { path: "/categories", label: "카테고리" },
];

export function Tabs() {
  const { pathname } = useRouter();
  return (
    <S.Container>
      {tabs.map((tab, index) => (
        <li key={index}>
          <Link href={tab.path}>
            <a className={["link", tab.path === pathname ? "current" : ""].join(" ")}>
              <Font.Medium>{tab.label}</Font.Medium>
            </a>
          </Link>
        </li>
      ))}
      <div
        className="current-tab-indicator"
        style={{
          transform: `translateX(calc(100% * ${tabs.findIndex((tab) => tab.path === pathname)})`,
        }}
      />
    </S.Container>
  );
}

const S = {
  Container: styled.ul`
    position: relative;

    width: fit-content;

    display: flex;

    margin-bottom: 20px;

    box-shadow: inset 0 -1px 0 0 ${Color.Blue100};

    > .current-tab-indicator {
      position: absolute;

      left: 0;
      right: 0;
      bottom: 0;

      width: 150px;
      height: 2px;

      background-color: ${Color.Blue300};

      transition: transform 0.3s;
    }

    > li {
      width: 150px;

      display: flex;

      > .link {
        width: 100%;

        padding: 16px 0;

        box-sizing: border-box;

        font-size: 2.4rem;
        color: ${Color.Blue100};
        text-align: center;

        transition: color 0.2s, box-shadow 0.2s;

        &.current {
          color: ${Color.Blue300};
        }
      }
    }

    ${Media.Desktop} {
      > li > .link {
        &:hover:not(.current) {
          color: ${Color.Blue200};
        }
      }
    }

    ${Media.Mobile} {
      > .current-tab-indicator {
        width: 100px;
      }

      > li {
        width: 100px;

        > .link {
          font-size: 2rem;
        }
      }
    }
  `,
};
