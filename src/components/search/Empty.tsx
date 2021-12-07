import styled from "styled-components";

import { Color } from "../../constants/color";

import { Font } from "../common/Font";

interface EmptyProps {
  text: string;
}

export function Empty({ text }: EmptyProps) {
  return (
    <S.Container>
      <Font.Light className="text">{text}</Font.Light>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;

    > .text {
      width: 100%;

      color: ${Color.Black50};
      font-size: 2rem;
      text-align: center;
    }
  `,
};
