"use client";
import NextLink from "next/link";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
interface Chapter {
  id: string;
  title: string;
  link: string;
}
interface ComicCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  chapters?: Chapter[];
  variant?: "default" | "";
}
const chapter = { id: "1", title: "Chapter 1", link: "#" };
const demoChapter = [...[chapter], ...[chapter], ...[chapter]];

export default function ComicCard({
  title = "Võ Luyện Đỉnh Phong",
  imageUrl = "https://st.nettruyenio.com/data/comics/32/vo-luyen-dinh-phong.jpg",
  chapters = demoChapter,
}: ComicCardProps) {
  return (
    <Card radius="sm" className="grid grid-cols-[30%,_70%] sx:flex">
      <CardHeader className="overflow-visible sx:justify-center p-0">
        <Image className="w-fit" alt={title} src={imageUrl} />
      </CardHeader>
      <CardBody className="sx:justify-center p-1 w-full">
        <NextLink href={`/comics/${title}/${123}`}>
          <b className="text-center">{title}</b>
        </NextLink>
        {chapters.slice(-3).map((chapter) => (
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
