import Image from "next/image";
import type { ImageProps } from "next/image";

export interface NextImageProps extends ImageProps {}

const NextImage: React.FC<NextImageProps> = Image;

export default NextImage;
