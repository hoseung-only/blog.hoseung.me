import { ReactNode } from "react";
import styled from "styled-components";

import { Color } from "../../../constants/color";

export function TableBlock({ children }: { children: ReactNode }) {
  return (
    <S.Container>
      <table>{children}</table>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;

    word-break: keep-all;

    overflow-x: scroll;

    > table {
      width: fit-content;

      border-spacing: 0;

      > thead {
        > tr {
          > th {
            padding: 6px 13px;

            box-sizing: border-box;

            border: 1px solid ${Color.Grey200};

            &:not(:last-child) {
              border-right: none;
            }
          }
        }
      }

      > tbody {
        > tr {
          > td {
            padding: 6px 13px;

            box-sizing: border-box;

            border: 1px solid ${Color.Grey200};
            border-top: none;

            &:not(:last-child) {
              border-right: none;
            }
          }
        }
      }
    }
  `,
};
