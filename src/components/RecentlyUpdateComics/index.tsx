"use client";

import ComicList from "@/components/ComicList";
import { createRandomComic } from "@/mocks/comics";
import { Comic } from "@/types/comic";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";

async function getAllComic() {
  return Array.from({ length: 4 * 3 * 2 * 2 }).map(createRandomComic);
}


export default function RecentlyUpdateComics() {
  const [comics, setComics] = useState<Comic[]>();

  useEffect(() => {
    const fetchComics = async () => {
      const comics = await getAllComic()
      setComics(comics);
    }
    fetchComics()
  }, [])

  return (
    <div className="w-full">
      <p>HeroSection</p>
      <ComicList comics={comics} />
      <div className="flex justify-center">
        <Pagination total={10} initialPage={1} />
      </div>
    </div>
  );
}
