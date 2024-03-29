"use client";

import { Icon } from "@iconify/react";
import { Switch } from "@nextui-org/react";
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
      color="default"
      startContent={<Icon icon="line-md:sun-rising-loop" />}
      endContent={<Icon icon="line-md:moon" />}
    />
  );
}
