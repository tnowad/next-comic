import NextImage from "@/components/NextImage";
import { ComicPreview } from "@/types/comic";
import { formatNumber } from "@/utils/number";
import { Image, Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { format } from "timeago.js";

interface ComicCardTooltipProps {
  comic?: ComicPreview;
}

export default function ComicCardTooltip({ comic }: ComicCardTooltipProps) {
  if (!comic) {
    return null;
  }
  return (
    <div className="w-[400px]">
      <Link
        as={NextLink}
        color="foreground"
        href={`/comics/${comic.slug}/${comic.id}`}
      >
        <p className="whitespace-break-spaces capitalize">{comic.title}</p>
      </Link>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <Image
            as={NextImage}
            className="z-0 h-[250px] w-full object-cover"
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
  );
}
