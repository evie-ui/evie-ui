import { createTheme, createThemeColors } from "@evie-ui/components/theme";
import { createColorVariations } from "@evie-ui/utils/theme";
import { baseTheme } from "./base";

export const lightTheme = createTheme({
  ...baseTheme,
  name: "light",
  colors: createThemeColors({
    ...baseTheme.colors,

    ...createColorVariations("background", {
      background: "#ffffff",
      onBackground: "#212121",
      onBackgroundVariant: "#b7b7b7",
    }),

    ...createColorVariations("surface", {
      surface: "#f6f6f6",
      onSurface: "#212121",
      onSurfaceVariant: "#888888",
    }),

    backdrop: "#000000",
    shadow: "#000000",
    outline: "#e5e5e5",
  }),
});
