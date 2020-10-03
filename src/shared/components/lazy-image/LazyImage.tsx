import * as React from "react";
import styled, { keyframes } from "styled-components";

type LazyImageProps = {
  src: string;
  title: string;
  style?: React.CSSProperties;
  className?: string;
  width?: number | string;
  height?: number | string;
};

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  title,
  style,
  height,
  width,
  className,
}) => {
  const [imageSrc, setImageSrc] = React.useState<string>(placeHolder);

  const observer = React.useRef<IntersectionObserver | null>();

  const imageElementRef = React.useCallback(
    (node) => {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.current?.unobserve(node);
          }
        },
        { rootMargin: "20%" }
      );

      if (node) {
        observer.current?.observe(node);
      }
    },
    [src]
  );

  return (
    <Image
      src={imageSrc}
      style={style}
      alt={title}
      ref={imageElementRef}
      height={height}
      width={width}
      className={className}
    />
  );
};

const fadeIn = keyframes`
	0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Image = styled.img`
  background-color: #f7f7f7;
  animation: 0.5s ${fadeIn} ease-out;
  border-radius: 4px;
  background-color: #f3f3f3;
  display: block;
`;
