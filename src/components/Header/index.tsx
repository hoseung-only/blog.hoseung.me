import Link from "next/link";
import styled from "styled-components";

import { Font } from "../Font";

import { Media } from "../../constants/media";

export function Header() {
  return (
    <S.Container>
      <Link href="/">
        <a className="link">
          <Font.Medium className="title">장호승 개발 블로그 😎</Font.Medium>
        </a>
      </Link>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;

    > .link > .title {
      font-size: 2.4rem;
    }

    ${Media.Mobile} {
      height: 80px;
    }
  `,
};
