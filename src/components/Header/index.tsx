import styled from "styled-components";

import { Font } from "../Font";

import { Media } from "../../constants/media";

export function Header() {
  return (
    <S.Container>
      <Font.Medium>장호승 개발 블로그</Font.Medium>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;

    > .title {
      font-size: 2.4rem;
    }

    ${Media.Mobile} {
      > .title {
        font-size: 2rem;
      }
    }
  `,
};
