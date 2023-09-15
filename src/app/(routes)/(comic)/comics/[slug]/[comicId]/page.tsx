import ComicDetail from "@/components/ComicDetail";
import FollowingComic from "@/components/FollowingComic";
import LeaderBoardComic from "@/components/LeaderBoardComic";
import ReadingHistoryComic from "@/components/ReadingHistoryComic";
import { createRandomComicPreview } from "@/mocks/comics";

async function getComicPreview() {
  return createRandomComicPreview();
}

export default async function Page() {
  const comic = await getComicPreview();

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
