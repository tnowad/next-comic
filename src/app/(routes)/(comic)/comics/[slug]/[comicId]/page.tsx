import ComicDetail from "@/components/comic-detail";
import FollowingComic from "@/components/following-comic";
import LeaderBoardComic from "@/components/leader-board-comic";
import ReadingHistoryComic from "@/components/reading-history-comic";
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
