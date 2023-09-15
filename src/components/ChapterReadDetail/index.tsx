"use client";

import { Chapter, Comic } from "@/types/comic";
import { Icon } from "@iconify/react";
import { Button, Divider, Link, Select, SelectItem } from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { useState } from "react";
import { useInView } from "react-hook-inview";
import { format } from "timeago.js";

interface ChapterReadDetailProps {
  comic: Comic;
  chapter: Chapter;
}

export default function ChapterReadDetail({
  comic,
  chapter,
}: ChapterReadDetailProps) {
  const [selectedChapter, setSelectedChapter] = useState<string>(chapter.id);
  const [ref, isVisible] = useInView({
    threshold: 1,
  });

  const Navnar = () => (
    <>
      <Link
        color="danger"
        as={NextLink}
        className="inline text-2xl capitalize"
        href={`/`}
      >
        <Icon icon="solar:home-bold" />
      </Link>
      <Link
        color="danger"
        as={NextLink}
        className="inline text-2xl capitalize"
        href={`/comics/${comic.slug}/${comic.id}#chapters`}
      >
        <Icon icon="ic:baseline-list" />
      </Link>
      <Button color="danger" className="min-w-3 text-white">
        <Icon icon="mingcute:left-line" />
      </Button>
      <Select
        selectionMode="single"
        placeholder="Select a chapter"
        required
        className="w-80 rounded-xl shadow-md"
        labelPlacement="outside-left"
        defaultSelectedKeys={[selectedChapter]}
        onChange={(event) => setSelectedChapter(event.target.value)}
      >
        {comic.chapters.map((chapter) => (
          <SelectItem key={chapter.id} value={chapter.id}>
            {chapter.title}
          </SelectItem>
        ))}
      </Select>
      <Button color="danger" className="min-w-3 text-white">
        <Icon icon="mingcute:right-line" />
      </Button>
      <Button color="warning" className="font-bold text-white">
        <Icon icon="mdi:heart" />
        Follow
      </Button>
    </>
  );

  return (
    <>
      <section className="rounded-lg bg-default/20 pb-2">
        <div className="p-3">
          <h1 className="flex text-xl">
            <Link
              color="primary"
              as={NextLink}
              className="inline text-xl capitalize"
              href={`/comics/${comic.slug}/${comic.id}`}
            >
              {comic.title}
              <span className="text-foreground"> - {chapter.title}</span>
            </Link>
          </h1>
          <p className="text-sm italic text-gray-500">
            Updated at {format(chapter.updatedAt)}
          </p>
        </div>
        <Divider />
        <div className="text-center">
          <p className="my-3">
            If you can&lsquo;t view the story, please change to &quot;IMAGE
            SERVER&quot; below
          </p>
          <div className="space-x-3">
            <Button color="success" className="font-bold text-white">
              Server 1
            </Button>
            <Button color="warning" className="font-bold text-white">
              Server 2
            </Button>
            <Button color="warning" className="font-bold text-white">
              Server 3
            </Button>
            <Button color="warning" className="font-bold text-white">
              Server 4
            </Button>
          </div>
        </div>
        <div
          ref={ref}
          className={
            "z-50 flex h-14 w-full items-center justify-center space-x-1 py-3"
          }
        >
          <Navnar />
        </div>
      </section>

      <div
        className={clsx(
          "z-50 hidden h-14 w-full items-center justify-center space-x-1 bg-default py-3",
          { "fixed left-0 right-0 top-0 !flex": !isVisible },
        )}
      >
        <Navnar />
      </div>
    </>
  );
}
