import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { SWRConfig } from "swr";

import { APIClientContextProvider } from "./contexts/APIClient";

import { RouteSwitch } from "./routes/RouteSwitch";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;

    padding: 0;
    margin: 0;

    font-size: 20px;
    font-weight: 300;
    font-family: 'NEXON Lv2 Gothic';

    @font-face {
      font-family: 'NEXON Lv2 Gothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    > #root {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
    }
  }
`;

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
        <RouteSwitch />
      </APIClientContextProvider>
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById("root")
);
