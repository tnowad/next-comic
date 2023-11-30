"use client";

import { ComicPreview } from "@/types/comic";
import { formatNumber } from "@/utils/number";
import { Icon } from "@iconify/react";
import {
  Button,
  Divider,
  Image,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { format } from "timeago.js";
import UnoptimizedNextImage from "../unoptimized-next-image";

interface ComicDetailProps {
  comic: ComicPreview;
}

export default function ComicDetail({ comic }: ComicDetailProps) {
  const router = useRouter();

  const renderAuthors = () => {
    return comic.authors.map((author, index) => (
      <span key={author.id}>
        <Tooltip content={<p className="capitalize">{author.role}</p>}>
          <Link
            as={NextLink}
            href={`/authors/${author.slug}/${author.id}`}
            color="primary"
            className="capitalize"
          >
            {author.name}
          </Link>
        </Tooltip>
        {index !== comic.authors.length - 1 && " - "}
      </span>
    ));
  };

  const renderGenres = () => {
    return comic.genres.map((genre, index) => (
      <span key={genre.id}>
        <Tooltip
          content={<p className="max-w-md capitalize">{genre.description}</p>}
        >
          <Link
            as={NextLink}
            href={`/genres/${genre.slug}/${genre.id}`}
            color="primary"
            className="capitalize"
          >
            {genre.title}
          </Link>
        </Tooltip>
        {index !== comic.genres.length - 1 && " - "}
      </span>
    ));
  };

  return (
    <div className="flex w-full flex-col gap-y-2">
      <div className="w-full">
        <h1 className="text-center text-xl uppercase">{comic.title}</h1>
        <p className="text-center italic">
          Updated At: {format(comic.updatedAt)}
        </p>
      </div>
      <div className="flex grid-cols-12 flex-col items-center md:grid md:items-start">
        <div className="col-span-4">
          <Image
            as={UnoptimizedNextImage}
            className="z-0 h-[350px] w-full object-cover"
            width={250}
            height={300}
            alt={comic.title}
            src={comic.coverImage}
          />
        </div>
        <div className="col-span-8">
          <div className="w-full">
            <p>
              <span className="inline-flex w-36 items-center">
                <Icon className="inline" icon="mdi:user" />
                Authors:
              </span>
              {renderAuthors()}
            </p>
            <p>
              <span className="inline-flex w-36 items-center">
                <Icon className="inline" icon="iconamoon:category-light" />
                Genres:
              </span>
              {renderGenres()}
            </p>
            <p>
              <span className="inline-flex w-36 items-center">
                <Icon className="inline" icon="mdi:eye-outline" />
                Total views:
              </span>
              {comic.totalViews.toLocaleString()}
            </p>
            <p>
              <span className="inline-flex w-36 items-center">
                <Icon className="inline" icon="material-symbols:star" />
                Rating:
              </span>
              {comic.averageRating.toFixed(2)}/5 -{" "}
              {comic.totalRating.toLocaleString()}
            </p>
            <p>
              <span className="inline-flex w-36 items-center">
                <Icon className="inline" icon="mdi:heart" />
                Total followers:
              </span>
              {comic.totalFollows.toLocaleString()}
            </p>
          </div>
          <div className="mt-3 inline-flex flex-wrap gap-2">
            <Button className="text-white" color="success">
              Follow
            </Button>
            <Button className="text-white" color="warning">
              Start
            </Button>
            <Button className="text-white" color="warning">
              Latest Chapter
            </Button>
            <Button className="text-white" color="danger">
              Continuous
            </Button>
          </div>
        </div>
      </div>
      <div>
        <p className="flex items-center text-primary">
          <Icon icon="dashicons:text" />
          Description
        </p>
        <Divider className="bg-primary" />
        {comic.description?.description}
      </div>
      <div className="hidden">
        {comic.description?.characters.map((character) => (
          <div key={character.id}>
            <div>
              <Image
                as={UnoptimizedNextImage}
                className="z-0 h-[350px] w-full object-cover"
                width={250}
                height={300}
                alt={character.name}
                src={character.coverImage}
              />
              {character.name}
            </div>
            <div>
              {character.role}
              {character.birthday.toLocaleString()}
              {character.description}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="flex items-center text-primary">
          <Icon icon="ic:baseline-list" />
          Chapters
        </p>
        <Divider className="bg-primary" />
        <Table selectionMode="single" removeWrapper>
          <TableHeader>
            <TableColumn>CHAPTERS</TableColumn>
            <TableColumn>UPDATE</TableColumn>
            <TableColumn>VIEWS</TableColumn>
          </TableHeader>
          <TableBody>
            {comic.chapters.map((chapter) => (
              <TableRow key={chapter.id}>
                <TableCell>
                  <Link
                    as={NextLink}
                    className="text-foreground visited:text-gray-500 hover:text-primary"
                    href={`/chapter/${chapter.slug}/${chapter.id}`}
                  >
                    {chapter.title}
                  </Link>
                </TableCell>
                <TableCell className="text-gray-500">
                  {format(chapter.updatedAt)}
                </TableCell>
                <TableCell className="text-gray-500">
                  {formatNumber(chapter.totalViews)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
