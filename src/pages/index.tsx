import { GetStaticPropsResult } from "next";
import styled from "styled-components";

import { PostSection, PostSectionProps } from "../components/main/PostSection";
// import { CategorySection, CategorySectionPlaceholder } from "../components/main/CategorySection";

import { Color } from "../constants/color";
import { Media } from "../constants/media";

import { client } from "../apiClient";

export default function Main(props: PostSectionProps) {
  return (
    <S.Container>
      {/* <ul className="tabs">
        {tabs.map((tab, index) => (
          <li key={index}>
            <NavLink className="link" activeClassName="current" to={tab.to} exact>
              <Font.Medium>{tab.label}</Font.Medium>
            </NavLink>
          </li>
        ))}
        <div
          className="current-tab-indicator"
          style={{
            transform: `translateX(calc(100% * ${tabs.findIndex((tab) => tab.to === window.location.pathname)})`,
          }}
        />
      </ul> */}
      <PostSection {...props} />
    </S.Container>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PostSectionProps>> {
  const { data, nextCursor } = await client.getPostsByCursor({ count: 12 });

  return {
    props: {
      posts: data,
      nextCursor,
    },
  };
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
    }

    ${Media.Desktop} {
      > .tabs > li > .link {
        &:hover:not(.current) {
          color: ${Color.Blue200};
        }
      }
    }

    ${Media.Mobile} {
      > .tabs {
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
    }
  `,
};
