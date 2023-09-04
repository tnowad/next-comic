import Link from "next/link";

interface LogoProps {
  title?: string;
  href?: string;
}

export default function Logo({ title = "NextComic", href = "/" }: LogoProps) {
  return (
    <Link href={href}>
      <span className="font-bold">{title}</span>
    </Link>
  );
}
