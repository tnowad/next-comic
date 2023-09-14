"use client";

import { createRandomUserPreview } from "@/mocks/comics";
import { UserPreview } from "@/types/user";
import { Link, User } from "@nextui-org/react";
import { useEffect, useState } from "react";

async function getCurrentUserPreview() {
  return createRandomUserPreview();
}

export default function ProfileSidebar() {
  const [user, setUser] = useState<UserPreview>();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUserPreview();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user && (
        <User
          name={user.name}
          description={
            <Link href={`/users/${user.id}`} size="sm" isExternal>
              {"@" + user.username}
            </Link>
          }
          classNames={{}}
          avatarProps={{
            src: user.avatarImage,
          }}
        />
      )}
    </div>
  );
}
