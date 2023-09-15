import { Metadata } from "next";
import Signup from "../components/Signup";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function Page() {
  return <Signup />;
}
