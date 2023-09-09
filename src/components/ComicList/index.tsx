import ComicCard from "../ComicCard";

interface ComicListProps {}

export default function ComicList({}: ComicListProps) {
  return (
    <div className="grid grid-cols-1 sx:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
      <ComicCard />
    </div>
  );
}
