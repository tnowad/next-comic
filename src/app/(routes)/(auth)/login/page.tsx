import { Metadata } from "next";
import Login from "../components/Login";

export const metadata: Metadata = {
  title: "Login | NextComic",
};

export default function Page() {
  return <Login />;
}
