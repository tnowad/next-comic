import { Comic } from "@/types/comic";

export default interface ComicCardProps {
  auto?: boolean;
  horizon?: boolean;
  comic?: Comic;
  maxTitleLength?: number;
  hideChapters?: boolean;
  hideDetail?: boolean;
}
