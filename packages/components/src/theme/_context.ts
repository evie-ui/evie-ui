import { createContext } from "react";
import type { Theme, ThemeComponents, ThemeWithGetToken } from "./_types";

type Props = {
  theme: ThemeWithGetToken;
  components: ThemeComponents;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<Props>({
  theme: {} as ThemeWithGetToken,
  components: {} as ThemeComponents,
  setTheme: () => {},
});
