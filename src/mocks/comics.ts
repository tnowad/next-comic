import { faker } from "@faker-js/faker";
import type {
  Comic,
  Author,
  ComicStatus,
  Chapter,
  Genre,
  Character,
} from "@/types/comic";

export function createRandomAuthor(): Author {
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

export function createRandomChapter(): Chapter {
  return {
    id: faker.string.uuid(),
    number: faker.number.int({ min: 0, max: 100000000 }),
    title: faker.helpers.regexpStyleStringParse("Chapter [1-1000]"),
    slug: faker.lorem.slug(),
    totalViews: faker.number.int({ min: 0, max: 100000000 }),
    updatedAt: faker.date.past(),
    images: faker.helpers.uniqueArray(faker.image.url, 20),
  };
}

export function createRandomGenre(): Genre {
  return {
    id: faker.string.uuid(),
    slug: faker.lorem.slug(),
    title: faker.lorem.word(),
    description: faker.lorem.paragraphs(),
  };
}

export function createRandomCharacter(): Character {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    birthday: faker.date.birthdate(),
    description: faker.lorem.paragraphs(),
    role: faker.helpers.arrayElement(["main", "wife"]),
    coverImage: faker.image.url(),
  };
}

export function createRandomComic(): Comic {
  return {
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 3, max: 20 } }),
    authors: faker.helpers.uniqueArray(createRandomAuthor, 3),
    description: {
      characters: faker.helpers.uniqueArray(createRandomCharacter, 4),
      description: faker.lorem.paragraphs(),
    },
    chapters: faker.helpers.uniqueArray(createRandomChapter, 50),
    totalViews: faker.number.int({ min: 0, max: 100000000 }),
    totalComments: faker.number.int({ min: 0, max: 100000000 }),
    slug: faker.lorem.slug(),
    totalFollows: faker.number.int({ min: 0, max: 100000000 }),
    genres: faker.helpers.uniqueArray(createRandomGenre, 10),
    coverImage: faker.image.url(),
    updatedAt: faker.date.past(),
    totalRating: faker.number.int({ min: 0, max: 100000000 }),
    averageRating: faker.number.float({ min: 0, max: 5 }),
    status: faker.helpers.arrayElement<ComicStatus>([
      "ongoing",
      "completed",
      "cancelled",
    ]),
  };
}
