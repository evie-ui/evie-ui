import { isNumber } from "@evie-ui/types";
import { useMemo, useState } from "react";
import { ThemeContext } from "./_context";
import type { Theme, ThemeWithGetToken } from "./_types";

type Props = React.PropsWithChildren & { initialTheme: Theme };

export const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = useState<Theme>(props.initialTheme);

  const themeWithGetToken = useMemo<ThemeWithGetToken>(
    () => ({
      getName: () => theme.name,
      getFontFamily: (token, fontWeight) => {
        "worklet";
        return (
          theme.fontFamily?.[token as keyof Theme["fontFamily"]]?.[
            fontWeight
          ] ?? token
        );
      },
      getColor: (token) => {
        "worklet";
        return theme.colors?.[token as keyof Theme["colors"]] ?? token;
      },
      getSpacing: (token) => {
        "worklet";
        if (isNumber(token)) return token;
        return theme.spacing?.[token as keyof Theme["spacing"]];
      },
      getPosition: (token) => {
        "worklet";
        if (typeof token === "number") return Number.isNaN(token) ? 0 : token;
        return theme.spacing?.[token as keyof Theme["spacing"]];
      },
      getRadius: (token) => {
        "worklet";
        if (typeof token === "number") return Number.isNaN(token) ? 0 : token;
        return theme.radius?.[token as keyof Theme["radius"]];
      },
      getFontSize: (token) => {
        "worklet";
        if (typeof token === "number") return Number.isNaN(token) ? 0 : token;
        return theme.fontSize?.[token as keyof Theme["fontSize"]];
      },
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme: themeWithGetToken, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
