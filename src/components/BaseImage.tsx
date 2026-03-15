import NextImage, { ImageProps } from "next/image";

const BASE_PATH = process.env.NODE_ENV === "production" ? "/ikuband-site" : "";

export default function BaseImage({ src, ...props }: ImageProps) {
  const prefixedSrc = typeof src === "string" && src.startsWith("/")
    ? `${BASE_PATH}${src}`
    : src;
  return <NextImage {...props} src={prefixedSrc} />;
}
