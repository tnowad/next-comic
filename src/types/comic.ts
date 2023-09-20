import { UserPreview } from "./user";

export interface Genre {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface ChapterPreview {
  id: string;
  number: number;
  title: string;
  totalViews: number;
  updatedAt: Date;
  slug: string;
}

export interface Chapter extends ChapterPreview {
  images: string[];
}

export interface CharacterPreview {
  id: string;
  coverImage: string;
  name: string;
  role: string;
}

export interface Character extends CharacterPreview {
  description: string;
  birthday: Date;
}

interface ComicDescription {
  characters: Character[];
  description: string;
}

export interface AuthorPreview {
  id: string;
  role: string;
  name: string;
  avatarImage: string;
  slug: string;
}

export interface Author extends AuthorPreview {
  sex: string;
  birthday: Date;
  description: string;
}

export type ComicStatus = "ongoing" | "completed" | "cancelled";

export interface ComicPreview {
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

export interface Comic extends ComicPreview {
  chapters: Chapter[];
}

export interface Comment {
  id: string;
  contents: string;
  user: UserPreview;
}

export interface GroupPreview {
  id: string;
  name: string;
  avatarImage: string;
}

export interface Group extends GroupPreview {
  members?: UserPreview[];
}
