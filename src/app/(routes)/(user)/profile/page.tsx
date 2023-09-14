"use client";

import { createRandomUserPreview } from "@/mocks/comics";
import { User, UserPreview } from "@/types/user";
import {
  Card,
  CardBody,
  Progress,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

async function getCurrentUser() {
  return createRandomUserPreview();
}
export default function Page() {
  const [user, setUser] = useState<UserPreview>();
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="information" title="Information">
          <Card>
            <CardBody>
              <div>Fullname: {user?.name}</div>
              <div>Email: {user?.email}</div>
              <div>{user?.roles.map((role) => <>{role.name}</>)}</div>
              <Progress
                label={
                  <p>
                    Level 5{" "}
                    <Tooltip content={<div>You are on top: 1%</div>}>
                      <span className="text-gray-500">#40</span>
                    </Tooltip>{" "}
                  </p>
                }
                size="sm"
                value={4000}
                maxValue={10000}
                color="danger"
                formatOptions={{ style: "currency", currency: "EXP" }}
                showValueLabel={true}
              />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="uploads" title="Upload">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
