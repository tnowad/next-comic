"use client";
import LargeLogo from "@/components/Logo/LargeLogo";
import SmallLogo from "@/components/Logo/SmallLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useIsMounted } from "@/hooks/use-is-mounted";
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
              <Button className="rounded-full" isIconOnly>
                <Icon icon="ion:notifications" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <LeaderBoardComic />
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button className="rounded-full" isIconOnly>
                <Avatar src={faker.image.url()} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem isReadOnly key="profile" className="h-14 gap-2">
                <User
                  name="Junior Garcia"
                  description="@jrgarciadev"
                  classNames={{
                    name: "text-default-600",
                    description: "text-default-500",
                  }}
                  avatarProps={{
                    size: "sm",
                    src: faker.image.url(),
                  }}
                />
              </DropdownItem>
              <DropdownItem key="followed-comics">Followed Comics</DropdownItem>
              <DropdownItem className="text-danger" color="danger" key="logout">
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu></NavbarMenu>
    </NextUINavbar>
  );
}
