export interface Genre {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  totalViews: number;
  updatedAt: Date;
  slug: string;
  images: string[];
}

interface ChapterPreview
  extends Pick<
    Chapter,
    "id" | "number" | "title" | "totalViews" | "slug" | "updatedAt"
  > { }

export interface Character {
  id: string;
  name: string;
  description: string;
  birthday: Date;
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
  averageRating: number;
  totalRating: number;
  updatedAt: Date;
}

export interface ComicPreview extends Comic { }

interface Comment {
  id: string;
  contents: string;
  user: UserPreview;
}
