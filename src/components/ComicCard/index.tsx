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
import { Comic } from "@/types/comic";
import { Icon } from "@iconify/react";
import { formatNumber } from "@/utils/number";
import { format } from "timeago.js";
import React from "react";

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
        <Tooltip
          content={
            <div className="w-[400px]">
              <Link
                as={NextLink}
                color="foreground"
                href={`/comics/${comic.slug}/${comic.id}`}
              >
                <p className="capitalize whitespace-break-spaces">
                  {comic.title}
                </p>
              </Link>
              <div className="grid grid-cols-12">
                <div className="col-span-5">
                  <Image
                    as={NextImage}
                    className="object-cover h-[250px] w-full z-0"
                    width={200}
                    height={250}
                    alt={comic.title}
                    src={comic.coverImage}
                  />
                </div>
                <div className="col-span-7">
                  <p className="capitalize">
                    <span className="text-green-400">Genres: </span>
                    {comic.genres.map((genre, index) => (
                      <React.Fragment key={genre.id}>
                        <Link
                          as={NextLink}
                          color="foreground"
                          href={`/genres/${genre.slug}/${genre.id}`}
                        >
                          {genre.title}
                        </Link>
                        {index !== comic.genres.length - 1 && ", "}
                      </React.Fragment>
                    ))}
                  </p>
                  <p>
                    <span className="text-green-400">Status: </span>
                    <Link
                      as={NextLink}
                      color="foreground"
                      className="uppercase"
                      href={`#`}
                    >
                      {comic.status}
                    </Link>
                  </p>
                  <p>
                    <span className="text-green-400">Total Views: </span>
                    {formatNumber(comic.totalViews)}
                  </p>
                  <p>
                    <span className="text-green-400">Total Followers: </span>
                    {formatNumber(comic.totalFollows)}
                  </p>
                  <p>
                    <span className="text-green-400">Total Comments: </span>
                    {formatNumber(comic.totalComments)}
                  </p>
                  <p>
                    <span className="text-green-400">Updated At: </span>
                    {format(comic.updatedAt)}
                  </p>
                </div>
              </div>
              <div>{comic.description?.description}</div>
            </div>
          }
        >
          <Link
            as={NextLink}
            color="foreground"
            href={`/comics/${comic.slug}/${comic.id}`}
          >
            <p className="capitalize whitespace-break-spaces">
              {truncatedTitle}
            </p>
          </Link>
        </Tooltip>
        <div>
          {comic.chapters.slice(-3).map((chapter) => (
            <Link
              as={NextLink}
              color="foreground"
              className="flex text-small justify-between w-full visited:text-gray-400"
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
