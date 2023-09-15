"use client";

import { Icon } from "@iconify/react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <div className="mt-1 hidden gap-1 md:grid">
        <Button startContent={<Icon icon="mdi:heart" />} color="primary">
          Follow
        </Button>
        <Button startContent={<Icon icon="ant-design:message-outlined" />}>
          Message
        </Button>
        <Button startContent={<Icon icon="material-symbols:report" />}>
          Report
        </Button>
      </div>
      <div className="flex md:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Button
              isIconOnly
              startContent={<Icon icon="material-symbols:report" />}
            />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              className="flex sx:hidden"
              startContent={<Icon icon="mdi:heart" />}
            >
              Follow
            </DropdownItem>
            <DropdownItem
              startContent={<Icon icon="ant-design:message-outlined" />}
            >
              Message
            </DropdownItem>
            <DropdownItem
              startContent={<Icon icon="material-symbols:report" />}
            >
              Report
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button startContent={<Icon icon="mdi:heart" />} color="primary">
          <div className="max-sx:hidden">Follow</div>
        </Button>
      </div>
    </React.Fragment>
  );
}
