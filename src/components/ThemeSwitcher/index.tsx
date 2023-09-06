"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      defaultChecked={theme == "dark"}
      onChange={onChange}
      color="primary"
      startContent={<Icon icon="line-md:sun-rising-loop" />}
      endContent={<Icon icon="line-md:moon" />}
    />
  );
}
