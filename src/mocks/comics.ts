import { faker } from "@faker-js/faker";
import type { Comic, Author } from "@/types/comic";

function createRandomAuthor(): Author {
  return {
    id: faker.string.uuid(),
    role: faker.helpers.arrayElement<string>(["author", "artist"]),
    name: faker.person.fullName(),
    sex: faker.person.sex(),
    description: faker.word.words({ count: { min: 0, max: 50 } }),
    birthday: faker.date.birthdate(),
    avatarImage: faker.image.url(),
  };
}

function createRandomComic(): Comic {
  return {
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 3, max: 20 } }),
    authors: faker.helpers.uniqueArray(createRandomAuthor, 3),
    description: undefined,
    chapters: [],
    genres: [],
    coverImage: "",
    status: "ongoing",
  };
}
