import { faker } from "@faker-js/faker";
import type { Comic, Author, ComicStatus, Chapter, Genre } from "@/types/comic";

function createRandomAuthor(): Author {
  return {
    id: faker.string.uuid(),
    role: faker.helpers.arrayElement<string>(["author", "artist"]),
    name: faker.person.fullName(),
    slug: faker.lorem.slug(),
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
    slug: faker.lorem.slug(),
    totalViews: faker.number.int({ min: 0 }),
    updatedAt: faker.date.past(),
  };
}

function createRandomGenre(): Genre {
  return {
    id: faker.string.uuid(),
    slug: faker.lorem.slug(),
    title: faker.lorem.lines({ min: 1, max: 4 }),
  };
}

export function createRandomComic(): Comic {
  return {
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 3, max: 20 } }),
    authors: faker.helpers.uniqueArray(createRandomAuthor, 3),
    description: undefined,
    chapters: faker.helpers.uniqueArray(createRandomChapter, 50),
    totalViews: faker.number.int({ min: 0, max: 100000000 }),
    totalComments: faker.number.int({ min: 0, max: 100000000 }),
    slug: faker.lorem.slug(),
    totalFollows: faker.number.int({ min: 0, max: 100000000 }),
    genres: faker.helpers.uniqueArray(createRandomGenre, 10),
    coverImage: faker.image.url(),
    status: faker.helpers.arrayElement<ComicStatus>([
      "ongoing",
      "completed",
      "cancelled",
    ]),
  };
}
