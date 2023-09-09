"use client";
import NextLink from "next/link";
import NextImage from "next/image";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import { Comic } from "@/types/comic";

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
        <Image
          as={NextImage}
          className="object-cover h-[250px] w-full"
          width={200}
          height={250}
          alt={comic.title}
          src={comic.coverImage}
        />
      </CardHeader>
      <CardBody className="p-1 w-full flex flex-col justify-between">
        <NextLink href={`/comics/${comic.title}/${comic.id}`}>
          <p className="capitalize whitespace-break-spaces">{truncatedTitle}</p>
        </NextLink>
        <div>
          {comic.chapters.slice(-3).map((chapter) => (
            <NextLink
              color="foreground"
              className="flex text-small justify-between w-full visited:text-gray-400"
              key={chapter.id}
              href={`/chapter/${comic.title}/${chapter.id}`}
            >
              <p>{chapter.title}</p>
              <p>{"1 giờ trước"}</p>
            </NextLink>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
