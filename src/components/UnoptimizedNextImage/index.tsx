import NextImage, { NextImageProps } from "../NextImage";

export default function UnoptimizedNextImage(props: NextImageProps) {
  return <NextImage {...props} unoptimized />;
}
