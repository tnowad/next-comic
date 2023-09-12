"use client";

import NextLink from "next/link";
import NextImage from "next/image";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
  Tooltip,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { formatNumber } from "@/utils/number";
import { format } from "timeago.js";
import React from "react";
import ComicCardProps from "./ComicCardProps";
import ComicCardTooltip from "./ComicCardTooltip";

export default function VerticalComicCard({
  comic,
  maxTitleLength = 50,
}: ComicCardProps) {
  if (!comic) {
    return null;
  }

  const truncatedTitle =
    comic.title.length > maxTitleLength
      ? comic.title.substring(0, maxTitleLength) + "..."
      : comic.title;

  return (
    <Card radius="sm" className="grid grid-cols-[30%,_70%] sx:flex">
      <CardHeader className="overflow-visible p-0 sx:justify-center">
        <div className="relative">
          <Image
            as={NextImage}
            className="z-0 h-[250px] w-full object-cover"
            width={200}
            height={250}
            alt={comic.title}
            src={comic.coverImage}
          />
          <div className="z-1 absolute h-fit w-full -translate-y-full bg-black/50">
            <p className="flex items-center justify-center gap-1 py-1 text-[13px] text-white">
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
      <CardBody className="flex w-full flex-col justify-between p-1">
        <Tooltip content={<ComicCardTooltip comic={comic} />}>
          <Link
            as={NextLink}
            color="foreground"
            href={`/comics/${comic.slug}/${comic.id}`}
          >
            <p className="whitespace-break-spaces capitalize">
              {truncatedTitle}
            </p>
          </Link>
        </Tooltip>
        <div>
          {comic.chapters.slice(-3).map((chapter) => (
            <Link
              as={NextLink}
              color="foreground"
              className="flex w-full justify-between text-small visited:text-gray-400"
              key={chapter.id}
              href={`/chapter/${comic.slug}/${chapter.id}`}
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
