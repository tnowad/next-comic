import ComicDetail from "@/components/ComicDetail";
import FollowingComic from "@/components/FollowingComic";
import LeaderBoardComic from "@/components/LeaderBoardComic";
import ReadingHistoryComic from "@/components/ReadingHistoryComic";
import { createRandomComic } from "@/mocks/comics";

async function getComic() {
  return createRandomComic();
}

export default async function Page() {
  const comic = await getComic();

  return (
    <section className="container mx-auto">
      <div className="xl:grid grid-cols-12">
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
