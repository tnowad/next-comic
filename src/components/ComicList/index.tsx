"use client";

import { ComicPreview } from "@/types/comic";
import { faker } from "@faker-js/faker";
import ComicCard from "../ComicCard";
import ComicCardSkeleton from "../ComicCard/ComicCardSkeleton";
import { useState } from "react";

interface ComicListProps {
  comics?: ComicPreview[];
  skeletonLength?: number;
}

export default function ComicList({
  comics,
  skeletonLength = 3 * 4,
}: ComicListProps) {
  const [isHorizon, setIsHorizon] = useState<boolean>(true);
  const isLoaded = !!comics;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sx:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4">
        {isLoaded
          ? comics.map((comic) => (
            <ComicCard comic={comic} horizon={isHorizon} key={comic.id} />
          ))
          : Array.from({ length: skeletonLength }).map(() => (
            <ComicCardSkeleton key={faker.string.uuid()} />
          ))}
      </div>
    </>
  );
}
