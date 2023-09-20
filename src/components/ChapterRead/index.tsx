"use client";

import { Chapter } from "@/types/comic";
import { Image } from "@nextui-org/react";
import UnoptimizedNextImage from "../UnoptimizedNextImage";

interface ChapterReadProps {
  chapter: Chapter;
}

export default function ChapterRead({ chapter }: ChapterReadProps) {
  return (
    <div className="flex w-full flex-col items-center">
      {chapter.images.map((image) => (
        <div key={image}>
          <Image
            as={UnoptimizedNextImage}
            src={image}
            className="rounded-none"
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
