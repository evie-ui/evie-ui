import { createContext } from "react";
import type { Theme, ThemeWithGetToken } from "./_types";

type Props = { theme: ThemeWithGetToken; setTheme: (theme: Theme) => void };

export const ThemeContext = createContext<Props>({
  theme: {} as ThemeWithGetToken,
  setTheme: () => {},
});
