export interface Genre {
  id: string;
  title: string;
  slug: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  totalViews: number;
  updatedAt: Date;
  slug: string;
}

interface ChapterPreview
  extends Pick<
    Chapter,
    "id" | "number" | "title" | "totalViews" | "slug" | "updatedAt"
  > {}

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
  description: string;
}

export interface Author {
  id: string;
  role: string;
  sex: string;
  name: string;
  avatarImage: string;
  birthday: Date;
  description: string;
  slug: string;
}

export type ComicStatus = "ongoing" | "completed" | "cancelled";

export interface Comic {
  id: string;
  slug: string;
  title: string;
  totalFollows: number;
  totalComments: number;
  totalViews: number;
  authors: Author[];
  description?: ComicDescription;
  chapters: ChapterPreview[];
  genres: Genre[];
  coverImage: string;
  status: ComicStatus;
}

interface ComicPreview extends Comic {}

interface Comment {
  id: string;
  contents: string;
  user: UserPreview;
}
