"use client";

import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  theme: "light" | "dark" | "system";
  set_theme: (theme: "light" | "dark" | "system") => void;
};

const theme_store = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      set_theme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
    }
  )
);

export function ToggleTheme() {
  const theme = theme_store((state) => state.theme);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function update(e: any) {
      document.documentElement.classList.add("changing-theme");
      const isDark = e.matches;

      if (theme === "system") {
        if (isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      document.documentElement.classList.remove("changing-theme");
    }

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="relative flex gap-1 bg-transparent">
      <div className="bg-gray-600 flex-1 z-20 w-32"></div>
      <div className="bg-gray-600 w-8 h-8 z-20"></div>

      <div className="absolute w-full h-full z-10 border-black border -bottom-0.5 -right-0.5" />
    </div>
  );
}
