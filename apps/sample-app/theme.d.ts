import type { lightTheme } from "./src/theming/light";

type BaseTheme = typeof lightTheme;
type ThemeColors = BaseTheme["colors"];
type ThemeSpacings = BaseTheme["spacing"];
type ThemeRadii = BaseTheme["radius"];
type ThemeFontSizes = BaseTheme["fontSize"];
type ThemeFontFamilies = BaseTheme["fontFamily"];

declare module "@evie-ui/components/extend-theme" {
  export interface Colors extends ThemeColors {}
  export interface Spacings extends ThemeSpacings {}
  export interface Radii extends ThemeRadii {}
  export interface FontSizes extends ThemeFontSizes {}
  export interface FontFamilies extends ThemeFontFamilies {}
}
