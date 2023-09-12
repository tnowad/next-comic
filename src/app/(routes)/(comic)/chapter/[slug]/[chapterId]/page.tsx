import ChapterRead from "@/components/ChapterRead";
import ChapterReadDetail from "@/components/ChapterReadDetail";
import { createRandomChapter, createRandomComic } from "@/mocks/comics";
async function getChapter() {
  return createRandomChapter();
}
async function getComic() {
  return createRandomComic();
}
async function getChapters() {
  return Array.from({ length: 20 }).map(createRandomChapter);
}

export default async function Page() {
  const chapter = await getChapter();
  const comic = await getComic();
  comic.chapters = await getChapters();

  return (
    <>
      <ChapterReadDetail comic={comic} chapter={chapter} />
      <ChapterRead chapter={chapter} />
    </>
  );
}
