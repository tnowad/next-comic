import ComicCard from "@/components/ComicCard";
import ComicList from "@/components/ComicList";
import FollowingComic from "@/components/FollowingComic";
import LeaderBoardComic from "@/components/LeaderBoardComic";
import ReadingHistoryComic from "@/components/ReadingHistoryComic";

export default function Page() {
  return (
    <>
      <section className="container mx-auto">
        <ComicList />
        <FollowingComic />
        <ReadingHistoryComic />
        <LeaderBoardComic />
      </section>
    </>
  );
}
