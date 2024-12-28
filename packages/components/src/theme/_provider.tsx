import {
  isNumber,
  type FontFamilyWeight,
  type NamedFontFamilyWeight,
} from "@evie-ui/types";
import { useMemo, useState } from "react";
import { ThemeContext } from "./_context";
import type { Theme, ThemeComponents, ThemeWithGetToken } from "./_types";

type Props = React.PropsWithChildren & {
  initialTheme: Theme;
  components?: ThemeComponents;
};

export const ThemeProvider = ({
  initialTheme,
  children,
  components = {},
}: Props) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

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
      getFontWeight: (token) => {
        "worklet";
        const fontWeights = {
          thin: 100,
          extralight: 200,
          light: 300,
          regular: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
        } satisfies Record<keyof NamedFontFamilyWeight, keyof FontFamilyWeight>;

        return fontWeights[token ?? "regular"];
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
    <ThemeContext.Provider
      value={{
        theme: themeWithGetToken,
        components,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
