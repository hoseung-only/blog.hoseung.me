import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { Font } from "../Font";

import { Media } from "../../../constants/media";

export function Header() {
  return (
    <S.Container>
      <Link className="link-to-home" to="/">
        <Font.Medium className="title">장호승 개발 블로그 😎</Font.Medium>
      </Link>
      <NavLink className="link-to-search" activeClassName="active" to="/search" exact={false}>
        <FiSearch className="icon" />
      </NavLink>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > .link-to-home > .title {
      font-size: 2.4rem;
    }

    > .link-to-search {
      &.active {
        display: none;
      }

      > .icon {
        width: 24px;
        height: 24px;
      }
    }

    ${Media.Mobile} {
      height: 80px;
    }
  `,
};
