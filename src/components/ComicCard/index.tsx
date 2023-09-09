"use client";

import NextLink from "next/link";
import NextImage from "next/image";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import { Comic } from "@/types/comic";
import { Icon } from "@iconify/react";
import { formatNumber } from "@/utils/number";
import { format } from "timeago.js";

interface ComicCardProps {
  comic: Comic;
  maxTitleLength?: number;
}

export default function ComicCard({
  comic,
  maxTitleLength = 50,
}: ComicCardProps) {
  const truncatedTitle =
    comic.title.length > maxTitleLength
      ? comic.title.substring(0, maxTitleLength) + "..."
      : comic.title;

  return (
    <Card radius="sm" className="grid grid-cols-[30%,_70%] sx:flex">
      <CardHeader className="overflow-visible sx:justify-center p-0">
        <div className="relative">
          <Image
            as={NextImage}
            className="object-cover h-[250px] w-full z-0"
            width={200}
            height={250}
            alt={comic.title}
            src={comic.coverImage}
          />
          <div className="w-full h-fit bg-black/50 absolute -translate-y-full z-1">
            <p className="text-white flex justify-center items-center gap-1 text-[13px] py-1">
              <Icon icon="fa:eye" />
              {formatNumber(comic.totalViews)}
              <Icon icon="fa6-regular:message" />
              {formatNumber(comic.totalComments)}
              <Icon icon="mdi:heart-outline" />
              {formatNumber(comic.totalFollows)}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-1 w-full flex flex-col justify-between">
        <Link
          as={NextLink}
          color="foreground"
          href={`/comics/${comic.title}/${comic.id}`}
        >
          <p className="capitalize whitespace-break-spaces">{truncatedTitle}</p>
        </Link>
        <div>
          {comic.chapters.slice(-3).map((chapter) => (
            <Link
              as={NextLink}
              color="foreground"
              className="flex text-small justify-between w-full visited:text-gray-400"
              key={chapter.id}
              href={`/chapter/${comic.title}/${chapter.id}`}
            >
              <p>{chapter.title}</p>
              <p>{format(chapter.updatedAt)}</p>
            </Link>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
