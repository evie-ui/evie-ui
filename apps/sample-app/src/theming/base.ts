import {
    createTheme,
    createThemeFontFamilies,
    createThemeFontSizes,
    createThemeRadii,
    createThemeSpacings,
  } from "@evie-ui/components/theme";
  import { createColorVariations } from "@evie-ui/utils/theme";
  
  export const baseTheme = createTheme({
    name: "base",
  
    radius: createThemeRadii({
      sm: 16,
      md: 24,
      lg: 32,
    }),
  
    fontSize: createThemeFontSizes({
      body: 14,
      title: 24,
      icon: 20,
      caption: 12,
      label: 14,
      button: 16,
      "page-title": 24,
      "section-title": 16,
    }),
  
    fontFamily: createThemeFontFamilies({
      title: {
        regular: "REM-Light",
        semibold: "REM-Regular",
        bold: "REM-Medium",
      },
      body: {
        regular: "REM-Light",
        semibold: "REM-Regular",
        bold: "REM-Medium",
      },
    }),
  
    spacing: createThemeSpacings({
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      "2xl": 48,
      "3xl": 64,
    }),
  
    colors: {
      "brand-pink-light": "#FFD9E9",
      "brand-pink-dark": "#FF6EAB",
  
      "brand-purple-light": "#EFDDFF",
      "brand-purple-dark": "#7566A0",
  
      ...createColorVariations("primary", {
        primary: "#ffa2b9",
        onPrimary: "#111111",
        onPrimaryVariant: "#7e505c",
      }),
    },
  });
  