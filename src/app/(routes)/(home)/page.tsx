import FollowingComic from "@/components/following-comic";
import LeaderBoardComic from "@/components/leader-board-comic";
import ReadingHistoryComic from "@/components/reading-history-comic";
import RecentlyUpdateComics from "@/components/recently-update-comics";
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
