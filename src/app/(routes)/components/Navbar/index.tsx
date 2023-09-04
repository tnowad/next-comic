import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Hot</Link>
        <Link href={"/"}>Following</Link>
        <Link href={"/"}>History</Link>
        <Link href={"/"}>Category</Link>
        <Link href={"/"}>Ranking</Link>
        <Link href={"/"}>Search</Link>
      </div>
    </nav>
  );
}
