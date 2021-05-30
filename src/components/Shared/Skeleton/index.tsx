import styled, { css } from "styled-components";

import { Color } from "../../../constants/color";

const animation = css`
  @keyframes loading {
    0% {
      background-color: ${Color.Grey50};
    }
    50% {
      background-color: ${Color.Grey10};
    }
    100% {
      background-color: ${Color.Grey50};
    }
  }

  animation: loading linear infinite 1s;
`;

export const Skeleton = {
  Rect: styled.div`
    ${animation}
  `,
  Text: styled.div`
    height: auto;

    line-height: inherit;

    &:empty:before {
      content: "\\00a0";
    }

    ${animation}
  `,
};
