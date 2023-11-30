import NotFound from "@/components/not-found";
import { Metadata } from "next";

export const metedata: Metadata = {
  title: "Page Not Found",
};

export default function NotFoundPage() {
  return <NotFound />;
}
