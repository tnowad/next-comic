"use client";

import { Chapter } from "@/types/comic";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";
interface ChapterReadProps {
  chapter: Chapter;
}

export default function ChapterRead({ chapter }: ChapterReadProps) {
  return (
    <div className="flex w-full flex-col items-center">
      {chapter.images.map((image) => (
        <div key={image}>
          <Image
            as={NextImage}
            src={image}
            height={1200}
            width={1200}
            removeWrapper
            sizes="100vw"
            alt={chapter.title + " " + chapter.number}
          />
        </div>
      ))}
    </div>
  );
}
