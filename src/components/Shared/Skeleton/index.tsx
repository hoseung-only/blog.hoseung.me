import styled, { css } from "styled-components";

import { Color } from "../../../constants/color";

const animation = css`
  @keyframes loading {
    0% {
      background-color: ${Color.Grey50};
    }
    50% {
      background-color: ${Color.Grey100};
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
    ${animation}

    &:empty:before {
      content: "\\00a0";
    }
  `,
};
