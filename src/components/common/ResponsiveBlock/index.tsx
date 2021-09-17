import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ResponsiveBlockProps {
  className?: string;
  width: number;
  height: number;
}

export const ResponsiveBlock = styled(
  ({ className, width, height, children }: PropsWithChildren<ResponsiveBlockProps>) => {
    return (
      <div className={className} style={{ paddingTop: `${(height / width) * 100}%` }}>
        <div className="content">{children}</div>
      </div>
    );
  }
)`
  position: relative;

  width: 100%;

  > .content {
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
`;
