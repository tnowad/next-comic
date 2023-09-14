"use client";

import { createRandomUserPreview } from "@/mocks/comics";
import { UserPreview } from "@/types/user";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function getCurrentUserPreview() {
  return faker.helpers.maybe(createRandomUserPreview, { probability: 0.5 });
}

export default function UserNavbarDropdown() {
  const router = useRouter();
  const [user, setUser] = useState<UserPreview>();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUserPreview();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="rounded-full" isIconOnly>
          <Avatar src={user?.avatarImage} />
        </Button>
      </DropdownTrigger>
      {user ? (
        <DropdownMenu aria-label="User menu">
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2"
            onClick={() => router.push("/profile")}
          >
            <User
              name={user.name}
              description={"@" + user.username}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: user.avatarImage,
              }}
            />
          </DropdownItem>
          <DropdownItem
            key="followed-comics"
            onClick={() => router.push("/")}
            endContent={<Icon icon="mdi:heart" />}
          >
            Followed Comics
          </DropdownItem>
          <DropdownItem
            key="setting"
            onClick={() => router.push("/settings")}
            endContent={<Icon icon="uil:setting" />}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            className="text-danger"
            color="danger"
            key="logout"
            endContent={<Icon icon="material-symbols:logout" />}
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      ) : (
        <DropdownMenu aria-label="User menu">
          <DropdownItem
            key="setting"
            onClick={() => router.push("/settings")}
            endContent={<Icon icon="uil:setting" />}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            key="login"
            onClick={() => router.push("/login")}
            endContent={<Icon icon="material-symbols:login" />}
          >
            Login
          </DropdownItem>
          <DropdownItem
            key="signup"
            onClick={() => router.push("/signup")}
            endContent={<Icon icon="mdi:register-outline" />}
          >
            Sign up
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
}
