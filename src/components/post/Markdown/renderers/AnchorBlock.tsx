import Link from "next/link";
import styled from "styled-components";

import { Color } from "../../../../constants/color";

export function AnchorBlock(props: any) {
  return props.href.startsWith("#") || props.href.startsWith("http") ? (
    <S.Container href={props.href}>{props.children}</S.Container>
  ) : (
    <Link href={props.href}>
      <S.Container>{props.children}</S.Container>
    </Link>
  );
}

const S = {
  Container: styled.a`
    font-weight: bold;
    color: ${Color.Blue300};
    text-decoration: none;

    &:hover {
      color: ${Color.Blue200};
    }
  `,
};
