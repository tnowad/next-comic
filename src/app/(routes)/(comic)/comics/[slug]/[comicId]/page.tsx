import ComicDetail from "@/components/ComicDetail";
import FollowingComic from "@/components/FollowingComic";
import LeaderBoardComic from "@/components/LeaderBoardComic";
import ReadingHistoryComic from "@/components/ReadingHistoryComic";
import { createRandomComicPreview } from "@/mocks/comics";
import { Metadata } from "next";

async function getComicPreview() {
  return createRandomComicPreview();
}

export const metadata: Metadata = {};

export default async function Page() {
  const comic = await getComicPreview();

  metadata.title = comic.title.toUpperCase();
  metadata.description = comic.description?.description;

  return (
    <section className="container mx-auto">
      <div className="grid-cols-12 xl:grid">
        <div className="col-span-8">
          <ComicDetail comic={comic} />
        </div>
        <div className="col-span-4">
          <FollowingComic />
          <ReadingHistoryComic />
          <LeaderBoardComic />
        </div>
      </div>
    </section>
  );
}
