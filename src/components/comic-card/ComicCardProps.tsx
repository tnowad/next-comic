import { ComicPreview } from "@/types/comic";

export default interface ComicCardProps {
  auto?: boolean;
  horizon?: boolean;
  comic?: ComicPreview;
  maxTitleLength?: number;
  hideChapters?: boolean;
  hideDetail?: boolean;
}
