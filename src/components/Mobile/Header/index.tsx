import styled from "styled-components";

import { Color } from "../../../constants/color";
import { externalLinks } from "../../../constants/externalLinks";

import { Label } from "../../Shared/Label";

export function Header() {
  return (
    <S.Container>
      <Label.M20 className="title">장호승 개발 블로그</Label.M20>
      <div className="link-list">
        {externalLinks.map((link) => (
          <a key={link.name} className="link" href={link.to}>
            <link.icon className="icon" />
          </a>
        ))}
      </div>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${Color.Grey100};

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

        &:not(:last-child) {
          margin-right: 10px;
        }

        > .icon {
          width: 25px;
          height: 25px;
        }
      }
    }
  `,
};
