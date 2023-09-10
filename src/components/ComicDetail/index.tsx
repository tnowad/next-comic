"use client";

import { Comic } from "@/types/comic";
import { format } from "timeago.js";
import { Button, Image, Link, Tooltip } from "@nextui-org/react";
import NextLink from "next/link";
import NextImage from "next/image";

interface ComicDetailProps {
  comic: Comic;
}

export default function ComicDetail({ comic }: ComicDetailProps) {
  const renderAuthors = () => {
    return comic.authors.map((author, index) => (
      <span key={author.id}>
        <Tooltip content={<p className="capitalize">{author.role}</p>}>
          <Link
            as={NextLink}
            href={`/authors/${author.slug}/${author.id}`}
            color="foreground"
            className="capitalize"
          >
            {author.name}
          </Link>
        </Tooltip>
        {index !== comic.authors.length - 1 && ", "}
      </span>
    ));
  };

  const renderGenres = () => {
    return comic.genres.map((genre, index) => (
      <span key={genre.id}>
        <Link
          as={NextLink}
          href={`/genres/${genre.slug}/${genre.id}`}
          color="foreground"
          className="capitalize"
        >
          {genre.title}
        </Link>
        {index !== comic.genres.length - 1 && ", "}
      </span>
    ));
  };

  return (
    <div>
      <div className="w-full">
        <h1 className="text-center text-xl uppercase">{comic.title}</h1>
        <p className="text-center italic">
          Updated At: {format(comic.updatedAt)}
        </p>
      </div>
      <div className="flex grid-cols-12 flex-col items-center md:grid md:items-start">
        <div className="col-span-4">
          <Image
            as={NextImage}
            className="z-0 h-[350px] w-full object-cover"
            width={250}
            height={300}
            alt={comic.title}
            src={comic.coverImage}
          />
        </div>
        <div className="col-span-8">
          <p>Authors: {renderAuthors()}</p>
          <p>Genres: {renderGenres()}</p>
          <p>Total views: {comic.totalViews}</p>
          <p>
            Rating: {comic.averageRating.toFixed(2)}/5 -{" "}
            {comic.totalRating.toLocaleString()}
          </p>
          <p>
            <Button>Follow</Button>
            {comic.totalFollows.toLocaleString()} Followers
          </p>
          <div>
            <Button>Start</Button>
            <Button>Latest Chapter</Button>
            <Button>Continuous</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
