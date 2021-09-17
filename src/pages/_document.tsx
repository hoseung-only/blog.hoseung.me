import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";

interface DocumentProps {
  style: ReactElement;
}

class BlogDocument extends Document<DocumentProps> {
  public static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const style = sheet.getStyleElement();

    return { ...page, style };
  }

  render() {
    return (
      <Html>
        <Head />
        {this.props.style}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BlogDocument;
