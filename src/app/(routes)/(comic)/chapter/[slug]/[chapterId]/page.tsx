import ChapterRead from "@/components/ChapterRead";
import { createRandomChapter, createRandomComic } from "@/mocks/comics";
import { ComicPreview } from "@/types/comic";
import { faker } from "@faker-js/faker";

async function getComicPreview() {
  return createRandomComic() as ComicPreview;
}

async function getChapter() {
  return createRandomChapter();
}

async function getChapters() {
  return faker.helpers.uniqueArray(createRandomChapter, 100);
}

export default async function Page() {
  const comicPreview = await getComicPreview();
  const chapter = await getChapter();
  const chapters = await getChapters();

  return (
    <div className="flex w-full flex-col">
      {comicPreview.title}
      {chapters.map((chapter) => (
        <div key={chapter.id}>{chapter.title}</div>
      ))}
      {chapter.title}
      <ChapterRead chapter={chapter} />
    </div>
  );
}
