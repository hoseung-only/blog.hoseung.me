import styled from "styled-components";

import { Profile } from "./Profile";
import { Tabs } from "./Tabs";

export function Header() {
  return (
    <S.Container>
      <Profile />
      <Tabs />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
