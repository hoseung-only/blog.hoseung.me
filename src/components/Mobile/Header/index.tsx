import styled from "styled-components";

import { Label } from "../../Shared/Label";

export function Header() {
  return (
    <S.Container>
      <Label.M20>장호승 개발 블로그</Label.M20>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
  `,
};
