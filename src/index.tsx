import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { SWRConfig } from "swr";

import { APIClientContextProvider } from "./contexts/APIClient";

import { Header as DesktopHeader } from "./components/Desktop/Header";
import { Header as MobileHeader } from "./components/Mobile/Header";
import { PlatformSwitch } from "./components/Shared/PlatformSwitch";

import { RouteSwitch } from "./routes/RouteSwitch";

import { Color } from "./constants/color";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    min-height: 100vh;

    padding: 0;
    margin: 0;

    font-size: 10px;
    font-weight: 300;
    font-family: 'NEXON Lv2 Gothic';

    @font-face {
      font-family: 'NEXON Lv2 Gothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    ul {
      margin: 0;
      padding: 0;
  
      list-style: none;
    }

    a {
      color: ${Color.Black100};
      text-decoration: none;
    }

    > #root {
      width: 100%;
      min-height: 100vh;

      display: flex;
      justify-content: center;

      background-color: ${Color.Grey10};
    }
  }
`;

const S = {
  DesktopContainer: styled.div`
    width: 100%;
    max-width: 1024px;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 0 20px;

    box-sizing: border-box;
  `,
  MobileContainer: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 0 16px;

    box-sizing: border-box;
  `,
};

ReactDOM.render(
  <BrowserRouter>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnMount: true,
        dedupingInterval: 1000 * 60 * 60,
        shouldRetryOnError: false,
      }}
    >
      <APIClientContextProvider>
        <GlobalStyle />
        <PlatformSwitch
          desktop={() => (
            <S.DesktopContainer>
              <DesktopHeader />
              <RouteSwitch />
            </S.DesktopContainer>
          )}
          mobile={() => (
            <S.MobileContainer>
              <MobileHeader />
              <RouteSwitch />
            </S.MobileContainer>
          )}
        />
      </APIClientContextProvider>
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById("root")
);
