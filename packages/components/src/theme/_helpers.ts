import type { Hex } from "@evie-ui/utils/color";
import { objectDeepMerge } from "@evie-ui/utils/object";
import { StringHelpers } from "@evie-ui/utils/string";
import type { ThemeColors } from "./_styles";

type ExtendableTheme = {
  name: string;
  colors: Record<string, Hex>;
  radius: Record<string, number>;
  fontSize: Record<string, number>;
  fontFamily: Record<string, { bold: string; semibold: string; regular: string }>;
  spacing: Record<string, number>;
};

export const createTheme = <T extends ExtendableTheme>(theme: T) => theme;

export const createThemeColors = <T extends ExtendableTheme["colors"]>(colors: T) =>
  ({ ...colors, transparent: "#00000000" }) as {
    [Key in keyof T]: Hex;
  };

export const createThemeSpacings = <T extends ExtendableTheme["spacing"]>(spacings: T) => {
  const negativeSpacings = Object.entries(spacings).reduce(
    (acc, [key, value]) => {
      acc[`-${key}`] = -value;
      return acc;
    },
    {} as Record<string, number>,
  );

  return {
    ...(negativeSpacings as { [Key in Extract<keyof T, string> as `-${Key}`]: number }),
    ...spacings,
    none: 0,
  } as const;
};

export const createThemeRadii = <T extends ExtendableTheme["radius"]>(radii: T) =>
  ({ ...radii, none: 0, full: 9999 }) as const;

export const createThemeFontSizes = <T extends ExtendableTheme["fontSize"]>(fontSizes: T) => fontSizes;

export const createThemeFontFamilies = <T extends ExtendableTheme["fontFamily"]>(fontFamilies: T) => fontFamilies;

export const createComponentDefaults = <Props extends object, Default extends Props>(
  props: Props,
  defaultProps: Partial<Default>,
): Omit<Props, keyof Default> & Required<Default> => {
  const mergedProps = objectDeepMerge<Props>(defaultProps as Props, props as Props);
  return mergedProps as Omit<Props, keyof Default> & Required<Default>;
};

export const getFallbackColorBasedOnBgColor = (bgColor: ThemeColors | undefined) =>
  bgColor !== undefined ? `on${StringHelpers.capitalize(bgColor as string)}` : undefined;
