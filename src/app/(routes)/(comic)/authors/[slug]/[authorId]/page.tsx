import { createRandomAuthor } from "@/mocks/comics";
import { Metadata } from "next";

export const metadata: Metadata = {};
async function getAuthor() {
  return createRandomAuthor();
}

export default async function AuthorPage() {
  const author = await getAuthor();

  metadata.title = author.name;
  metadata.description = author.description;

  return <div>Author page</div>;
}
