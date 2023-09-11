import { Comic } from "@/types/comic";
import ComicCard from "../ComicCard";
import ComicCardSkeleton from "../ComicCard/ComicCardSkeleton";
import { faker } from "@faker-js/faker";

interface ComicListProps {
  comics?: Comic[]
}
export default function ComicList({ comics }: ComicListProps) {
  const isLoaded = !!comics
  return (
    <div className="grid grid-cols-1 gap-3 sx:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {isLoaded ? comics.map((comic) => (
        <ComicCard comic={comic} key={comic.id} />
      )) : Array.from({ length: 24 }).map(() => (
        <ComicCardSkeleton key={faker.string.uuid()} />
      ))}
    </div>
  );
}
