import { create } from "zustand";
import { persist } from "zustand/middleware";

import { THEME } from "./constants";
import type { Theme } from "./types";

type ThemeStore = {
  theme: Theme;
  set_theme: (theme: Theme) => void;
};

const STORE_NAME = "theme";

export const theme_store = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: THEME.LIGHT,
      set_theme: (theme) => set({ theme }),
    }),
    {
      name: STORE_NAME,
    }
  )
);
