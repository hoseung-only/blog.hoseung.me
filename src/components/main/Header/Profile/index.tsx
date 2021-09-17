import styled from "styled-components";

import { Font } from "../../../Font";

import { externalLinks } from "../../../../constants/externalLinks";
import { Media } from "../../../../constants/media";

export function Profile() {
  return (
    <S.Container>
      <img className="image" src="images/main/profile-image.png" alt="" />
      <Font.Light className="introduction">개발과 기록을 즐기는 장호승입니다.</Font.Light>
      <ul className="external-link-list">
        {externalLinks.map((link, index) => {
          const { icon: Icon, to, name } = link;
          return (
            <li key={index}>
              <a href={to}>
                <Icon className="icon" />
                <Font.Light className="name">{name}</Font.Light>
              </a>
            </li>
          );
        })}
      </ul>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 40px 0 16px;

    > .image {
      width: 200px;
      height: 200px;

      margin-bottom: 15px;

      border-radius: 50%;

      object-fit: cover;
    }

    > .introduction {
      margin-bottom: 8px;

      font-size: 2rem;
      text-align: center;
    }

    > .external-link-list {
      display: flex;

      > li {
        &:not(:last-child) {
          margin-right: 10px;
        }

        > a {
          display: flex;

          > .icon {
            width: 20px;
            height: 20px;

            margin-right: 2px;
          }

          > .name {
            font-size: 1.8rem;
          }
        }
      }
    }

    ${Media.Desktop} {
      > .external-link-list > li {
        &:hover {
          text-decoration: underline;
        }
      }
    }

    ${Media.Mobile} {
      > .image {
        width: 150px;
        height: 150px;
      }
    }
  `,
};
