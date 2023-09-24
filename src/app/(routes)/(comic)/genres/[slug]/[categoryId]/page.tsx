import { createRandomGenre } from "@/mocks/comics";
import { Metadata } from "next";

export const metadata: Metadata = {};
async function getGenre() {
  return createRandomGenre();
}

export default async function GenrePage() {
  const genre = await getGenre();

  metadata.title = genre.title;
  metadata.description = genre.description;

  return <div>Genre page</div>;
}
