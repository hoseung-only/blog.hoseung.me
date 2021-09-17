import { CSSProperties, useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { Media } from "../../../constants/media";

import { ResponsiveBlock } from "../../ResponsiveBlock";
import { Skeleton } from "../../Skeleton";

interface FadeImageProps {
  src: string;
  alt?: string;
  imgStyle?: CSSProperties;
}

export function FadeImage({ src, alt = "", imgStyle }: FadeImageProps) {
  const image = useMemo(() => {}, [src]);
  const [isImageLoaded, setIsImageLoaded] = useState(() => true);

  useEffect(() => {
    // if (!image.complete) {
    //   image.onload = () => setIsImageLoaded(true);
    // }
  }, [image]);

  return (
    <S.Container width={4} height={3}>
      <img className={isImageLoaded ? "loaded" : ""} src={src} alt={alt} style={imgStyle} />
    </S.Container>
  );
}

const S = {
  Container: styled(ResponsiveBlock)`
  border-radius: 10px;

  overflow: hidden;

    > .content {
      width: 100%;
      height: 100%;

      > img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        opacity: 0;

        &.loaded {
          @keyframes fade {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          animation: fade 0.15s linear;
          animation-fill-mode: forwards;
        }
      }

      > ${Skeleton.Rect} {
        width: 100%;
        height: 100%;
      }
    }

    ${Media.Desktop} {
      &:hover > .content {
          transform: scale(1.1);
        }
      }

      > .content {
        transition: transform 0.2s;
      }
    }
  `,
};
