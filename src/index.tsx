import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { SWRConfig } from "swr";

import { APIClientContextProvider } from "./contexts/APIClient";

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

import { RouteSwitch } from "./routes/RouteSwitch";

import { Color } from "./constants/color";
import { Media } from "./constants/media";

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');

  html, body {
    width: 100%;
    min-height: 100vh;

    padding: 0;
    margin: 0;

    font-size: 10px;
    font-family: 'NEXON Lv2 Gothic';
    line-height: 1.4;

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;

    h1 {
      margin: 0;
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

    ${Media.Mobile} {
      font-size: 8px;
    }
  }
`;

const S = {
  Container: styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 0 20px;

    box-sizing: border-box;

    ${Media.Mobile} {
      max-width: 100%;

      padding: 0 16px;
    }
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
        <S.Container>
          <Header />
          <RouteSwitch />
          <Footer />
        </S.Container>
      </APIClientContextProvider>
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById("root")
);
