"use client";
import LargeLogo from "@/components/Logo/LargeLogo";
import SmallLogo from "@/components/Logo/SmallLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Route } from "@/types/page";
import { faker } from "@faker-js/faker";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  Navbar as NextUINavbar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { useRef, useState } from "react";
import LeaderBoardComic from "../LeaderBoardComic";
import { useRouter } from "next/navigation";
import UserNavbarDropdown from "../UserNavbarDropdown";

interface NavbarProps {
  routes: Route[];
  mobileRoutes: Route[];
}

export default function Navbar({ routes, mobileRoutes }: NavbarProps) {
  const ref = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
  const router = useRouter();

  const searchButton = (
    <Button
      aria-label="Quick search"
      className="bg-default-400/20 text-sm font-normal text-default-500 dark:bg-default-500/20"
      startContent={
        <Icon
          icon="line-md:search"
          className="pointer-events-none flex-shrink-0 text-base text-default-400"
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
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink
            aria-label="Home"
            className="flex items-center justify-start gap-2 transition-opacity tap-highlight-transparent active:opacity-50"
            href="/"
          >
            <SmallLogo className="h-6 w-6 md:hidden" />
            <LargeLogo className="h-5 md:h-6" />
          </NextLink>
        </NavbarBrand>
        <NavbarItem className="w-full"></NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchButton}</NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Popover showArrow>
            <PopoverTrigger>
              <Button
                className="rounded-full bg-foreground/20 hover:bg-foreground/10 dark:hover:bg-foreground/40"
                isIconOnly
              >
                <Icon icon="ion:notifications" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <LeaderBoardComic />
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem>
          <UserNavbarDropdown />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu></NavbarMenu>
    </NextUINavbar>
  );
}
