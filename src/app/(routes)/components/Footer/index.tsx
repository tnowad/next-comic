"use client";

import dynamic from "next/dynamic";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

import siteConfig from "@/configs/site";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes("/examples")) {
    return null;
  }

  return (
    <footer className="container mx-auto max-w-7xl pb-12 px-12">
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm text-default-400">
          Created by{" "}
          <Link
            isExternal
            className="text-sm"
            href={siteConfig.links.portfolio}
          >
            {siteConfig.author}
          </Link>
        </p>
      </div>
    </footer>
  );
}
