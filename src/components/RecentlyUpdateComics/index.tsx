"use client";

import ComicList from "@/components/ComicList";
import { createRandomComic } from "@/mocks/comics";
import { Comic } from "@/types/comic";
import { Button, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

async function getAllComic() {
  return Array.from({ length: 4 * 3 * 2 * 2 }).map(createRandomComic);
}

export default function RecentlyUpdateComics() {
  const [comics, setComics] = useState<Comic[]>();
  const router = useRouter();

  useEffect(() => {
    const fetchComics = async () => {
      const comics = await getAllComic();
      setComics(comics);
    };
    fetchComics();
  }, []);

  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between">
        <p className="text-xl text-primary">Newly updated comics</p>
        <Button
          variant="ghost"
          className="min-w-0 border-none text-xl outline-none"
          onClick={() => router.push("/search")}
        >
          <Icon icon="solar:filter-outline" />
        </Button>
      </div>
      <ComicList comics={comics} />
      <div className="my-2 flex justify-center">
        <Pagination total={10} initialPage={1} />
      </div>
    </div>
  );
}
