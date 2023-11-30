"use client";

import NextImage from "@/components/next-image";
import { formatNumber } from "@/utils/number";
import { Icon } from "@iconify/react";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Link,
  Tooltip,
} from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { format } from "timeago.js";
import ComicCardProps from "./ComicCardProps";
import ComicCardTooltip from "./ComicCardTooltip";

export default function ComicCard({
  comic,
  hideChapters,
  maxTitleLength = 50,
  horizon,
}: ComicCardProps) {
  if (!comic) {
    return null;
  }

  const truncatedTitle =
    comic.title.length > maxTitleLength
      ? comic.title.substring(0, maxTitleLength) + "..."
      : comic.title;

  return (
    <Card radius="sm" className={clsx("grid grid-cols-12 sx:flex")}>
      <CardHeader
        className={"col-span-5 overflow-visible p-0 sx:justify-center"}
      >
        <div className="relative">
          <Image
            as={NextImage}
            removeWrapper
            className="z-0 h-[200px] w-full object-cover sx:h-[250px]"
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
      <CardBody className="col-span-7 flex w-full flex-col p-1 sx:justify-between">
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
          {hideChapters ??
            comic.chapters.slice(-3).map((chapter) => (
              <Link
                as={NextLink}
                color="foreground"
                className="flex w-full justify-between text-[13px] visited:text-gray-400"
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
