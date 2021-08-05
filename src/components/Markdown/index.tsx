import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import slug from "remark-slug";
import styled from "styled-components";

import { AnchorBlock } from "./renderers/AnchorBlock";
import { CodeBlock } from "./renderers/CodeBlock";
import { TableBlock } from "./renderers/TableBlock";
import { ImageBlock } from "./renderers/ImageBlock";
import { BlockquoteBlock } from "./renderers/BlockquoteBlock";

export function Markdown({ content }: { content: string }) {
  return (
    <S.Container>
      <ReactMarkdown
        remarkPlugins={[gfm, slug]}
        components={{
          a: AnchorBlock,
          code: CodeBlock,
          table: TableBlock,
          img: ImageBlock,
          blockquote: BlockquoteBlock,
        }}
      >
        {content}
      </ReactMarkdown>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    font-size: 1.8rem;
  `,
};
