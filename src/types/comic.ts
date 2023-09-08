interface User {
  id: string;
  name: string;
  avatarImage: string;
  birthday: string;
  bio: string;
  role: string;
}

interface UserPreview extends Pick<User, "id" | "name" | "avatarImage"> {}

interface Genre {
  id: string;
  title: string;
}

interface Chapter {
  id: string;
  number: number;
  title: string;
  view: number;
}

interface Character {
  id: string;
  name: string;
  description: string;
  birthday: string;
  role: string;
  coverImage: string;
}

interface ComicDescription {
  characters: Character[];
}

interface Author {
  id: string;
  name: string;
  avatarImage: string;
  birthday: string;
  description: string;
}

interface Comic {
  id: string;
  title: string;
  author: Author;
  description: ComicDescription;
  chapters: Chapter[];
  genres: Genre[];
  coverImage: string;
  status: string;
}

interface Comment {
  id: string;
  contents: string;
  user: UserPreview;
}
