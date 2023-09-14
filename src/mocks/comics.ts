import type {
  Author,
  AuthorPreview,
  Chapter,
  ChapterPreview,
  Character,
  CharacterPreview,
  Comic,
  ComicPreview,
  ComicStatus,
  Genre,
} from "@/types/comic";
import { User, UserPreview } from "@/types/user";
import { faker } from "@faker-js/faker";

const catImages = ["/images/image.jpg", "/images/image-small.jpg"];

export function createRandomAuthorPreview(): AuthorPreview {
  return {
    id: faker.string.uuid(),
    role: faker.helpers.arrayElement<string>(["author", "artist"]),
    name: faker.person.fullName(),
    slug: faker.lorem.slug(),
    avatarImage: faker.image.url({ height: 400, width: 200 }),
  };
}

export function createRandomAuthor(): Author {
  return {
    ...createRandomAuthorPreview(),
    sex: faker.person.sex(),
    description: faker.word.words({ count: { min: 0, max: 50 } }),
    birthday: faker.date.birthdate(),
  };
}

export function createRandomChapterPreview(): ChapterPreview {
  return {
    id: faker.string.uuid(),
    number: faker.number.int({ min: 0, max: 100000000 }),
    title: faker.helpers.regexpStyleStringParse("Chapter [1-1000]"),
    slug: faker.lorem.slug(),
    totalViews: faker.number.int({ min: 0, max: 100000000 }),
    updatedAt: faker.date.past(),
  };
}

export function createRandomChapter(): Chapter {
  return {
    ...createRandomChapterPreview(),
    images: faker.helpers.arrayElements(
      Array.from({ length: 20 }).map(
        (_, index) => catImages[index % catImages.length],
      ),
      20,
    ),
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

export function createRandomCharacterPreview(): CharacterPreview {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    role: faker.helpers.arrayElement(["main", "wife"]),
    coverImage: faker.image.url(),
  };
}

export function createRandomCharacter(): Character {
  return {
    ...createRandomCharacterPreview(),
    birthday: faker.date.birthdate(),
    description: faker.lorem.paragraphs(),
  };
}

export function createRandomComicPreview(): ComicPreview {
  return {
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 3, max: 20 } }),
    authors: faker.helpers.uniqueArray(createRandomAuthor, 3),
    description: {
      characters: faker.helpers.uniqueArray(createRandomCharacter, 4),
      description: faker.lorem.paragraphs(),
    },
    chapters: faker.helpers.uniqueArray(createRandomChapterPreview, 50),
    totalViews: faker.number.int({ min: 0, max: 100000000 }),
    totalComments: faker.number.int({ min: 0, max: 100000000 }),
    slug: faker.lorem.slug(),
    totalFollows: faker.number.int({ min: 0, max: 100000000 }),
    genres: faker.helpers.uniqueArray(createRandomGenre, 10),
    // coverImage: faker.image.url(),
    coverImage: catImages[0],
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

export function createRandomComic(): Comic {
  return {
    ...createRandomComicPreview(),
    chapters: faker.helpers.uniqueArray(createRandomChapter, 50),
  };
}

export function createRandomUserPreview(): UserPreview {
  return {
    id: faker.string.uuid(),
    name: faker.internet.displayName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    avatarImage: catImages[0],
    roles: faker.helpers.arrayElements(
      [
        "Group Leader",
        "Group Member",
        "User",
        "Author",
        "Artist",
        "Moderator",
        "Admin",
      ],
      4,
    ),
  };
}

export function createRandomUser(): User {
  return {
    ...createRandomUserPreview(),
    birthday: faker.date.birthdate(),
    bio: faker.lorem.paragraphs(),
  };
}
