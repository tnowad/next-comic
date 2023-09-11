import FollowingComic from "@/components/FollowingComic";
import LeaderBoardComic from "@/components/LeaderBoardComic";
import ReadingHistoryComic from "@/components/ReadingHistoryComic";
import RecentlyUpdateComics from "@/components/RecentlyUpdateComics";

export default function Page() {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid-cols-12 xl:grid">
          <div className="col-span-8">
            <RecentlyUpdateComics />
          </div>
          <div className="col-span-4">
            <FollowingComic />
            <ReadingHistoryComic />
            <LeaderBoardComic />
          </div>
        </div>
      </section>
    </>
  );
}
