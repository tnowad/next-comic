import ComicCard from "../ComicCard";
import { createRandomComic } from "@/mocks/comics";

interface ComicListProps { }

async function getAllComic() {
  return Array.from({ length: 4 * 3 * 2 * 2 }).map(createRandomComic);
}

export default async function ComicList({ }: ComicListProps) {
  const comics = await getAllComic();

  return (
    <div className="grid grid-cols-1 gap-3 sx:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {comics.map((comic) => (
        <ComicCard comic={comic} key={comic.id} />
      ))}
    </div>
  );
}
