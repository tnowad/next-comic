import ComicList from "@/components/ComicList";
import FollowingComic from "@/components/FollowingComic";
import LeaderBoardComic from "@/components/LeaderBoardComic";
import ReadingHistoryComic from "@/components/ReadingHistoryComic";

export default function Page() {
  return (
    <>
      <section className="container mx-auto">
        <div className="xl:grid grid-cols-12">
          <div className="col-span-8">
            <ComicList />
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
