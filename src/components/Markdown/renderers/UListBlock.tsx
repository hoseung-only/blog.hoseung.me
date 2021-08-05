import styled from "styled-components";

export function UListBlock(props: any) {
  return <S.Container>{props.children}</S.Container>;
}

const S = {
  Container: styled.ul`
    padding-left: 40px;
    margin: 18px 0;

    list-style: disc;
  `,
};
