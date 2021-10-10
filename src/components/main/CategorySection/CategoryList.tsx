import { Link } from "react-router-dom";

import styled from "styled-components";

import { Models } from "@hoseung-only/blog-api-client";

import { Font } from "../../common/Font";

import { Color } from "../../../constants/color";
import { Media } from "../../../constants/media";

interface CategoryListProps {
  categories: Models.AllCategoriesShow["data"];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <S.Container>
      {categories.map((category) => (
        <li key={category.id} className="item">
          <div className="parent-wrapper">
            <Link to={`/categories/${category.id}/posts`} className="link-to-parent">
              <Font.Medium className="name">{category.name}</Font.Medium>
            </Link>
          </div>
          {category.children.length > 0 && (
            <ul className="children">
              {category.children.map((child) => (
                <li key={child.id} className="child-wrapper">
                  <Link to={`/categories/${child.id}/posts`} className="link-to-child">
                    <Font.Medium className="name">{child.name}</Font.Medium>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    > .item {
      width: 500px;

      display: flex;
      flex-direction: column;

      border-radius: 10px;

      background-color: ${Color.Blue100};

      overflow: hidden;

      &:not(:last-child) {
        margin-bottom: 15px;
      }

      > .parent-wrapper {
        width: 100%;

        display: flex;

        background-color: ${Color.Blue200};

        > .link-to-parent {
          width: 100%;

          padding: 10px 16px;

          box-sizing: border-box;

          > .name {
            font-size: 2.2rem;
            color: ${Color.White};
          }
        }
      }

      > .children {
        width: 100%;

        display: flex;
        flex-direction: column;

        > .child-wrapper {
          width: 100%;

          display: flex;

          > .link-to-child {
            width: 100%;

            padding: 10px 16px;

            box-sizing: border-box;

            > .name {
              font-size: 1.9rem;
              color: ${Color.White};
            }
          }
        }
      }
    }

    ${Media.Desktop} {
      > .item {
        > .parent-wrapper:hover {
          background-color: ${Color.Blue250};
        }

        > .children > .child-wrapper:hover {
          background-color: ${Color.Blue150};
        }
      }
    }

    ${Media.Mobile} {
      > .item {
        width: 100%;
        max-width: 500px;
      }
    }
  `,
};
