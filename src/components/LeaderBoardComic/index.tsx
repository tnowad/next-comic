"use client";

import { createRandomComicPreview } from "@/mocks/comics";
import { ComicPreview } from "@/types/comic";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ComicCardHorizon from "../ComicCard/ComicCardHorizon";

interface LeaderBoardComicProps {}
async function getTopViewComicByMonth() {
  return Array.from({ length: 5 }).map(createRandomComicPreview);
}
async function getTopViewComicByWeek() {
  return Array.from({ length: 5 }).map(createRandomComicPreview);
}
async function getTopViewComicByDate() {
  return Array.from({ length: 5 }).map(createRandomComicPreview);
}
export default function LeaderBoardComic({}: LeaderBoardComicProps) {
  const [topMonthComics, setTopMonthComics] = useState<ComicPreview[]>();
  const [topWeekComics, setTopWeekComics] = useState<ComicPreview[]>();
  const [topDateComics, setTopDateComics] = useState<ComicPreview[]>();

  useEffect(() => {
    const fetchTopMonthComics = async () => {
      const comics = await getTopViewComicByMonth();
      setTopMonthComics(comics);
    };

    fetchTopMonthComics();

    const fetchTopWeekComics = async () => {
      const comics = await getTopViewComicByWeek();
      setTopWeekComics(comics);
    };

    fetchTopWeekComics();

    const fetchTopDateComics = async () => {
      const comics = await getTopViewComicByDate();
      setTopDateComics(comics);
    };

    fetchTopDateComics();
  }, []);

  return (
    <div className="flex w-full flex-col justify-center">
      <Tabs variant="underlined" className="justify-center">
        <Tab key={"month"} title="Top Month">
          <Card>
            <CardBody className="grid gap-2">
              {topMonthComics?.map((comic) => (
                <ComicCardHorizon key={comic.id} comic={comic} />
              ))}
            </CardBody>
          </Card>
        </Tab>
        <Tab key={"week"} title="Top Week">
          <Card>
            <CardBody className="grid gap-2">
              {topWeekComics?.map((comic) => (
                <ComicCardHorizon key={comic.id} comic={comic} />
              ))}
            </CardBody>
          </Card>
        </Tab>
        <Tab key={"date"} title="Top Date">
          <Card>
            <CardBody className="grid gap-2">
              {topDateComics?.map((comic) => (
                <ComicCardHorizon key={comic.id} comic={comic} />
              ))}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
