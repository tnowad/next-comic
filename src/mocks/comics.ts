import { faker } from "@faker-js/faker";
import type { Comic, Author, ComicStatus, Chapter } from "@/types/comic";

function createRandomAuthor(): Author {
  return {
    id: faker.string.uuid(),
    role: faker.helpers.arrayElement<string>(["author", "artist"]),
    name: faker.person.fullName(),
    sex: faker.person.sex(),
    description: faker.word.words({ count: { min: 0, max: 50 } }),
    birthday: faker.date.birthdate(),
    avatarImage: faker.image.url({ height: 400, width: 200 }),
  };
}

function createRandomChapter(): Chapter {
  return {
    id: faker.string.uuid(),
    number: faker.number.int({ min: 0 }),
    title: faker.helpers.regexpStyleStringParse("Chapter [1-1000]"),
    view: faker.number.int({ min: 0 }),
  };
}

export function createRandomComic(): Comic {
  return {
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 3, max: 20 } }),
    authors: faker.helpers.uniqueArray(createRandomAuthor, 3),
    description: undefined,
    chapters: faker.helpers.uniqueArray(createRandomChapter, 50),
    genres: [],
    coverImage: faker.image.url(),
    status: faker.helpers.arrayElement<ComicStatus>([
      "ongoing",
      "completed",
      "cancelled",
    ]),
  };
}
