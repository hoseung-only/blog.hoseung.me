import styled from "styled-components";

export function ImageBlock(props: any) {
  return <S.Container src={props.src} alt="" />;
}

const S = {
  Container: styled.img`
    width: 100%;

    object-fit: contain;
  `,
};
