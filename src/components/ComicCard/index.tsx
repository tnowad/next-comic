"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
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
}
const chapter = { id: "1", title: "Chapter 1", link: "#" };
const demoChapter = [...[chapter], ...[chapter], ...[chapter]];

export default function ComicCard({
  title = "Võ Luyện Đỉnh Phong",
  imageUrl = "https://st.nettruyenio.com/data/comics/32/vo-luyen-dinh-phong.jpg",
  chapters = demoChapter,
}: ComicCardProps) {
  return (
    <Card className="" radius="sm">
      <CardHeader className="overflow-visible p-0">
        <Image alt={title} src={imageUrl} />
      </CardHeader>
      <CardBody className="justify-center p-1">
        <b className="text-center">{title}</b>
      </CardBody>
      <CardFooter className="flex-col justify-start py-0">
        {chapters.slice(-3).map((chapter) => (
          <Link
            color="foreground"
            className="text-small justify-between w-full"
            key={chapter.id}
          >
            <b>{chapter.title}</b>
            <p>{"1 gio truoc"}</p>
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
}
