import { GetStaticPropsResult } from "next";
import Link from "next/link";
import _ from "lodash";
import styled from "styled-components";

import { Models } from "@hoseung-only/blog-api-client";

import { Font } from "../../components/Font";
import { Skeleton } from "../../components/Skeleton";

import { Color } from "../../constants/color";
import { Media } from "../../constants/media";

import { client } from "../../apiClient";

import { Cache } from "../../cache";

interface CategoriesProps {
  categories: Models.AllCategoriesShow["data"];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <S.Container>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}/posts`}>
              <a className="link">
                <Font.Medium>{category.name}</Font.Medium>
              </a>
            </Link>
            {category.children.length > 0 && (
              <ul className="child-category-list">
                {category.children.map((child) => (
                  <li key={child.id}>
                    <Link href={`/categories/${child.id}/posts`}>
                      <a className="link">
                        <Font.Medium>{child.name}</Font.Medium>
                      </a>
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

export async function getStaticProps(): Promise<GetStaticPropsResult<CategoriesProps>> {
  const key = "getAllCategories";
  const cached = Cache.get<Models.AllCategoriesShow>(key);
  if (cached) {
    return {
      props: {
        categories: cached.data,
      },
    };
  }

  const result = await client.getAllCategories({});
  Cache.set(key, result);
  return {
    props: {
      categories: result.data,
    },
  };
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
