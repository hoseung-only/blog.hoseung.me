import styled from "styled-components";

import { Color } from "../../../constants/color";
import { externalLinks } from "../../../constants/externalLinks";

import { Label } from "../../Shared/Label";

export function Header() {
  return (
    <S.Container>
      <Label.M24 className="title">장호승 개발 블로그</Label.M24>
      <div className="link-list">
        {externalLinks.map((link) => (
          <a key={link.name} className="link" href={link.to}>
            <link.icon className="icon" />
            <Label.B20>{link.name}</Label.B20>
          </a>
        ))}
      </div>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-bottom: 1px solid ${Color.Grey100};

    > .title {
      margin-bottom: 12px;
    }

    > .link-list {
      height: 25px;

      display: flex;
      align-items: center;

      > .link {
        height: 100%;

        display: flex;
        align-items: center;

        color: ${Color.Blue300};
        text-decoration: none;

        &:hover {
          color: ${Color.Blue100};
        }

        &:not(:last-child) {
          margin-right: 12px;
        }

        > .icon {
          width: 22px;
          height: 22px;

          margin-right: 2px;
        }
      }
    }
  `,
};
