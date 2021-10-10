import { ReactNode } from "react";
import styled from "styled-components";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return <S.Container>{children}</S.Container>;
}

const S = {
  Container: styled.div`
    flex: 1;

    width: 100%;
  `,
};
