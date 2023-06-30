import { create } from "zustand";

type CodeTheme = {
  theme: string;
  style: any;
  setTheme: (theme: string) => void;
};

export const useCodeTheme = create<CodeTheme>((set) => ({
  theme: "dark",
  style: {},
  setTheme: async (theme: string) => {
    const style = await import(
      `react-syntax-highlighter/dist/esm/styles/prism/${theme}`
    ).then((mod) => mod.default);

    set({ theme, style });
  },
}));
