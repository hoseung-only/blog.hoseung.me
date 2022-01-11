import styled from "styled-components";

export function LIBlock(props: any) {
  return <S.Container>{props.children}</S.Container>;
}

const S = {
  Container: styled.li`
    display: list-item;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  `,
};
