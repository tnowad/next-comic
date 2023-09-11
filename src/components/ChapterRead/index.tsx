"use client";

import { Chapter } from "@/types/comic";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";
interface ChapterReadProps {
  chapter: Chapter;
}

export default function ChapterRead({ chapter }: ChapterReadProps) {
  return (
    <div>
      {chapter.images.map((image) => (
        <Image
          key={image}
          src={image}
          slot="123"
          className=""
          alt={chapter.title + " " + chapter.number}
        />
      ))}
    </div>
  );
}
