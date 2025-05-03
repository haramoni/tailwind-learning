"use client";

import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div>
      <div className="text-sm font-bold">Tema</div>
      <div className="font-light text-zinc-400">
        <button className="cursor-pointer" onClick={() => setTheme("light")}>
          Light
        </button>{" "}
        ou{" "}
        <button className="cursor-pointer" onClick={() => setTheme("dark")}>
          Dark
        </button>
      </div>
    </div>
  );
}
