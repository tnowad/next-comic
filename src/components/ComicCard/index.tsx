"use client";
import NextLink from "next/link";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import { Comic } from "@/types/comic";
interface Chapter {
  id: string;
  title: string;
  link: string;
}
interface ComicCardProps {
  comic: Comic;
  variant?: "default" | "";
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
        <Image className="w-fit" alt={comic.title} src={comic.coverImage} />
      </CardHeader>
      <CardBody className=" p-1 w-full">
        <NextLink href={`/comics/${comic.title}/${comic.id}`}>
          <p className="capitalize whitespace-break-spaces">{truncatedTitle}</p>
        </NextLink>
        {comic.chapters.slice(-3).map((chapter) => (
          <Link
            color="foreground"
            className="text-small justify-between w-full"
            key={chapter.id}
          >
            <p>{chapter.title}</p>
            <p className="text-foreground">{"1 giờ trước"}</p>
          </Link>
        ))}
      </CardBody>
    </Card>
  );
}
