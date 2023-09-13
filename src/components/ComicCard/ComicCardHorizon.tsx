import { ComicPreview } from "@/types/comic";
import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { format } from "timeago.js";

interface ComicCardHorizonProps {
  comic: ComicPreview;
  maxTitleLength?: number;
}

export default function ComicCardHorizon({
  comic,
  maxTitleLength = 50,
}: ComicCardHorizonProps) {
  const truncatedTitle =
    comic.title.length > maxTitleLength
      ? comic.title.substring(0, maxTitleLength) + "..."
      : comic.title;

  return (
    <div className="flex gap-2">
      <div className="h-[100px] w-[100px]">
        <Image
          alt={comic.title}
          as={NextImage}
          src={comic.coverImage}
          width={100}
          height={100}
          className="h-full object-cover"
          removeWrapper
        />
      </div>
      <div className="w-full">
        <div>
          <Link
            as={NextLink}
            color="foreground"
            className="w-full capitalize"
            href={`/comics/${comic.slug}/${comic.id}`}
          >
            {truncatedTitle}
          </Link>
        </div>

        <div className="flex w-full flex-col justify-center">
          {comic.chapters.slice(-1).map((chapter) => (
            <div key={chapter.id} className="flex w-full justify-between">
              <Link
                as={NextLink}
                color="foreground"
                className="capitalize visited:text-gray-500"
                href={`/chapter/${chapter.slug}/${chapter.id}`}
              >
                {chapter.title}
              </Link>
              <p>{format(chapter.updatedAt)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
