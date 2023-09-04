"use client";
import React from "react";
import { Switch } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const handleToggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <Switch
      defaultSelected
      size="lg"
      defaultChecked={theme == "dark"}
      onChange={handleToggleTheme}
      color="primary"
      startContent={<Icon icon="line-md:sun-rising-loop" />}
      endContent={<Icon icon="line-md:moon" />}
    />
  );
}
