import { PropsWithChildren, createContext, useContext } from "react";
import styled, { css } from "styled-components";

interface GridProps {
  columnSize: number;
  columnMargin: number;
  rowMargin: number;
}

const GridContext = createContext<GridProps | null>(null);

export function Grid({ children, ...value }: PropsWithChildren<GridProps>) {
  return (
    <GridContext.Provider value={value}>
      <S.Grid>{children}</S.Grid>
    </GridContext.Provider>
  );
}

export function GridItem({ children }: PropsWithChildren<{}>) {
  const context = useContext(GridContext);
  if (!context) {
    throw new Error("GridItem must be used within Grid");
  }
  return <S.GridItem {...context}>{children}</S.GridItem>;
}

const S = {
  Grid: styled.ul`
    width: 100%;

    display: flex;
    flex-flow: row wrap;
  `,
  GridItem: styled.li<GridProps>`
    ${({ columnSize, columnMargin, rowMargin }) => css`
      width: calc((100% - ${columnMargin * (columnSize - 1)}px) / ${columnSize});

      margin-right: ${columnMargin}px;
      margin-bottom: ${rowMargin}px;

      &:nth-child(${columnSize}n) {
        margin-right: 0;
      }

      &:nth-last-child(-n + ${columnSize}):nth-child(${columnSize}n) ~ & {
        margin-bottom: 0;
      }
    `}
  `,
};
