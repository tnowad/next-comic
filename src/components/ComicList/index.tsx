"use client";

import { ComicPreview } from "@/types/comic";
import { faker } from "@faker-js/faker";
import ComicCard from "../ComicCard";
import ComicCardSkeleton from "../ComicCard/ComicCardSkeleton";

interface ComicListProps {
  comics?: ComicPreview[];
}

export default function ComicList({ comics }: ComicListProps) {
  const isLoaded = !!comics;
  return (
    <div className="grid grid-cols-1 gap-3 sx:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4">
      {isLoaded
        ? comics.map((comic) => <ComicCard comic={comic} key={comic.id} />)
        : Array.from({ length: 3 * 4 * 5 }).map(() => (
          <ComicCardSkeleton key={faker.string.uuid()} />
        ))}
    </div>
  );
}
