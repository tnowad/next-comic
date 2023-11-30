import NextImage, { NextImageProps } from "../next-image";

export default function UnoptimizedNextImage(props: NextImageProps) {
  return <NextImage {...props} unoptimized />;
}
