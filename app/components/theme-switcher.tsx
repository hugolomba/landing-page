"use client";

import { Button } from "@heroui/button";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  if (!theme) return null;

  return (
    <div>
      The current theme is: {theme}
      <Button onPress={() => setTheme("light")}>Light Mode</Button>
      <Button onPress={() => setTheme("dark")}>Dark Mode</Button>
    </div>
  );
}
