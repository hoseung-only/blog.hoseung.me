import styled from "styled-components";

import { Label } from "../../Shared/Label";

export function Header() {
  return (
    <S.Container>
      <Label.M24>장호승 개발 블로그</Label.M24>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
  `,
};
