"use client";

import { createRandomComic } from "@/mocks/comics";
import { Comic } from "@/types/comic";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ComicCardHorizon from "../comic-card/ComicCardHorizon";

interface LeaderBoardComicProps {}
async function getFollowedComics() {
  return Array.from({ length: 5 }).map(createRandomComic);
}
async function getReadedComics() {
  return Array.from({ length: 5 }).map(createRandomComic);
}
export default function UserReadingComic({}: LeaderBoardComicProps) {
  const [followedComics, setFollowedComics] = useState<Comic[]>();
  const [readedComics, setReadedComics] = useState<Comic[]>();

  useEffect(() => {
    const fetchFollowedComics = async () => {
      const comics = await getFollowedComics();
      setFollowedComics(comics);
    };

    fetchFollowedComics();

    const fetchReadedComics = async () => {
      const comics = await getReadedComics();
      setReadedComics(comics);
    };

    fetchReadedComics();
  }, []);

  return (
    <div className="flex w-full flex-col justify-center">
      <Tabs variant="underlined" className="justify-center">
        <Tab key={"followed"} title="Followed">
          <Card>
            <CardBody className="grid gap-2">
              {followedComics?.map((comic) => (
                <ComicCardHorizon key={comic.id} comic={comic} />
              ))}
            </CardBody>
          </Card>
        </Tab>
        <Tab key={"readed"} title="Readed">
          <Card>
            <CardBody className="grid gap-2">
              {readedComics?.map((comic) => (
                <ComicCardHorizon key={comic.id} comic={comic} />
              ))}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
