import _ from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Font } from "../../../components/Font";
import { Skeleton } from "../../../components/Skeleton";

import { Color } from "../../../constants/color";
import { Media } from "../../../constants/media";

import { useCategories } from "../hooks/useCategories";

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
        {_.times(3, (index) => (
          <li key={index}>
            <div className="link">
              <Font.Medium>
                <Skeleton.Text />
              </Font.Medium>
            </div>
            <ul className="child-category-list">
              {_.times(2, (index) => (
                <li key={index}>
                  <div className="link">
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
    flex-direction: column;
    align-items: center;

    > .category-list {
      display: flex;
      flex-direction: column;

      > li {
        &:not(:last-child) {
          margin-bottom: 20px;
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

          margin-top: 8px;

          > li {
            margin-left: 30px;

            &:not(:last-child) {
              margin-bottom: 10px;
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
          transition: color 0.1s;

          &:hover {
            color: ${Color.Grey400};
          }
        }

        > .child-category-list > li > .link {
          transition: color 0.1s;

          &:hover {
            color: ${Color.Grey400};
          }
        }
      }
    }
  `,
};
