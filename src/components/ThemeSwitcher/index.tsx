"use client";

import React from "react";
import { Switch, useSwitch } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const { Component, slots, isSelected, getBaseProps, getWrapperProps } =
    useSwitch({
      isSelected: theme === "light",
      onChange,
      "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
    });

  return (
    <>
      <Component
        {...getBaseProps({
          className: clsx(
            "p-1 w-8 h-8 transition-opacity hover:opacity-80 cursor-pointer",
            className,
            classNames?.base
          ),
        })}
      ></Component>
      <Switch
        defaultSelected
        size="lg"
        defaultChecked={theme == "dark"}
        onChange={onChange}
        color="primary"
        startContent={<Icon icon="line-md:sun-rising-loop" />}
        endContent={<Icon icon="line-md:moon" />}
      />
    </>
  );
}
