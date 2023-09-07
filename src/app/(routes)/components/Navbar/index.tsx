"use client";
import {
  link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Link,
  Button,
  Kbd,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Chip,
} from "@nextui-org/react";
import NextLink from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Route } from "@/types/page";
import SmallLogo from "@/components/Logo/SmallLogo";
import LargeLogo from "@/components/Logo/LargeLogo";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { Icon } from "@iconify/react";

interface NavbarProps {
  routes: Route[];
  mobileRoutes: Route[];
}

export default function Navbar({ routes, mobileRoutes }: NavbarProps) {
  const ref = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);

  const isMounted = useIsMounted();

  const searchButton = (
    <Button
      aria-label="Quick search"
      className="text-sm font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"
      startContent={
        <Icon
          icon="line-md:search"
          className="text-base text-default-400 pointer-events-none flex-shrink-0"
          strokeWidth={2}
        />
      }
    >
      Quick Search...
    </Button>
  );

  return (
    <NextUINavbar
      ref={ref}
      className={clsx({ "z-[100000]": isMenuOpen })}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            aria-label="Home"
            className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50"
            href="/"
          >
            <SmallLogo className="w-6 h-6 md:hidden" />
            <LargeLogo className="h-5 md:h-6" />
          </NextLink>
        </NavbarBrand>
        <NavbarItem className="w-full"></NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchButton}</NavbarItem>
      </NavbarContent>
      <NavbarMenu></NavbarMenu>
    </NextUINavbar>
  );
}
