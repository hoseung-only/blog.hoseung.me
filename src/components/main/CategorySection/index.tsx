import _ from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useCategories } from "../../../hooks/main/useCategories";

import { Font } from "../../common/Font";
import { Skeleton } from "../../common/Skeleton";

import { Color } from "../../../constants/color";
import { Media } from "../../../constants/media";

export function CategorySection() {
  const categories = useCategories();
  return (
    <S.Container>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link className="link" to={`/categories/${category.id}/posts`}>
              <Font.Medium>{category.name}</Font.Medium>
            </Link>
            {category.children.length > 0 && (
              <ul className="child-category-list">
                {category.children.map((child) => (
                  <li key={child.id}>
                    <Link className="link" to={`/categories/${child.id}/posts`}>
                      <Font.Medium>{child.name}</Font.Medium>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </S.Container>
  );
}

export function CategorySectionPlaceholder() {
  return (
    <S.Container>
      <ul className="category-list">
        {_.times(4, (index) => (
          <li key={index}>
            <div className="link placeholder">
              <Font.Medium>
                <Skeleton.Text />
              </Font.Medium>
            </div>
            <ul className="child-category-list">
              {_.times(2, (index) => (
                <li key={index}>
                  <div className="link placeholder">
                    <Font.Medium>
                      <Skeleton.Text />
                    </Font.Medium>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    > .category-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;

      > li {
        margin-bottom: 40px;

        &:not(:last-child) {
          margin-right: 50px;
        }

        > .link {
          font-size: 2.4rem;

          > ${Font.Medium} > ${Skeleton.Text} {
            width: 100px;
          }
        }

        > .child-category-list {
          display: flex;
          flex-direction: column;

          margin-top: 12px;

          > li {
            position: relative;

            padding-left: 40px;

            box-sizing: border-box;

            &::before {
              position: absolute;

              top: calc(50% - 2px);
              left: 16px;

              content: "";

              width: 10px;
              height: 2px;

              background-color: ${Color.Black100};
            }

            &:not(:last-child) {
              margin-bottom: 16px;
            }

            > .link {
              font-size: 2.4rem;

              > ${Font.Medium} > ${Skeleton.Text} {
                width: 120px;
              }
            }
          }
        }
      }
    }

    ${Media.Desktop} {
      > .category-list > li {
        > .link {
          &:hover:not(.placeholder) {
            text-decoration: underline;
          }
        }

        > .child-category-list > li > .link {
          &:hover:not(.placeholder) {
            text-decoration: underline;
          }
        }
      }
    }

    ${Media.Tablet} {
      > .category-list > li {
        > .link {
          &:not(.placeholder) {
            text-decoration: underline;
          }
        }

        > .child-category-list > li > .link {
          &:not(.placeholder) {
            text-decoration: underline;
          }
        }
      }
    }

    ${Media.Mobile} {
      > .category-list > li {
        > .link {
          &:not(.placeholder) {
            text-decoration: underline;
          }
        }

        > .child-category-list > li > .link {
          &:not(.placeholder) {
            text-decoration: underline;
          }
        }
      }
    }
  `,
};
