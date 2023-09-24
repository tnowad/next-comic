import FollowingComic from "@/components/FollowingComic";
import LeaderBoardComic from "@/components/LeaderBoardComic";
import ReadingHistoryComic from "@/components/ReadingHistoryComic";
import RecentlyUpdateComics from "@/components/RecentlyUpdateComics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <section className="mx-auto">
        <div className="grid-cols-12 gap-2 xl:grid">
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
