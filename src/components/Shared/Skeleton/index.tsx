import styled from "styled-components";

export const Skeleton = {
  Rect: styled.div``,
  Text: styled.div`
    height: auto;

    line-height: inherit;

    &:empty:before {
      content: "\\00a0";
    }
  `,
};
