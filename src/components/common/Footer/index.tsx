import styled from "styled-components";

import { Font } from "../Font";

import { Color } from "../../../constants/color";

export function Footer() {
  return (
    <S.Container>
      <div className="text-group">
        <Font.Light>ⓒ 2020</Font.Light>
        <a href="https://github.com/hoseung-only/blog.hoseung.me">
          <Font.Medium>HoseungJang</Font.Medium>
        </a>
        <Font.Light>All RIGHTS RESERVED.</Font.Light>
      </div>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;

    > .text-group {
      width: 100%;

      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      > * {
        flex-shrink: 0;

        font-size: 2.4rem;
        color: ${Color.Black50};

        &:not(:last-child) {
          margin-right: 6px;
        }
      }
    }
  `,
};
