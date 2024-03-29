"use client";
import LargeLogo from "@/components/logo/LargeLogo";
import SmallLogo from "@/components/logo/SmallLogo";
import ThemeSwitcher from "@/components/theme-switcher";
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
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { useRef, useState } from "react";
import LeaderBoardComic from "../leader-board-comic";
import { useRouter } from "next/navigation";
import UserNavbarDropdown from "../user-navbar-dropdown";

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

  const routeLinks = (
    <>
      {routes.map((route) => (
        <div key={route.key}>
          <Link
            color="foreground"
            className="mr-4 uppercase"
            href={route.path ?? ""}
            as={NextLink}
          >
            {route.title}
          </Link>
        </div>
      ))}
    </>
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
        <NavbarMenuItem className="hidden flex-row lg:flex">
          {routeLinks}
        </NavbarMenuItem>
        <NavbarItem className="w-full"></NavbarItem>
        <NavbarItem className="hidden sm:flex">{searchButton}</NavbarItem>
        <NavbarItem className="hidden sm:flex">
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
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {mobileRoutes.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
