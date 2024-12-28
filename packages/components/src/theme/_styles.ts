import type {
  LiteralUnion,
  NamedFontFamilyWeight,
  Percentage,
} from "@evie-ui/types";
import type { BoxShadowValue, TextStyle, ViewStyle } from "react-native";
import type {
  Colors,
  FontFamilies,
  FontSizes,
  Radii,
  Spacings,
} from "../extend-theme";

export type ThemeColors =
  | LiteralUnion<Extract<keyof Colors, string>>
  | "transparent";
export type ThemeRadius = LiteralUnion<Extract<keyof Radii, string>>;
export type ThemeSpacing = LiteralUnion<Extract<keyof Spacings, string>>;
export type ThemePosition = LiteralUnion<
  Extract<keyof Spacings | Percentage, string>
>;
export type ThemeFontSize = LiteralUnion<Extract<keyof FontSizes, string>>;
export type ThemeFontWeight = keyof NamedFontFamilyWeight;
export type ThemeFontFamily = LiteralUnion<Extract<keyof FontFamilies, string>>;

export const shadowProps = ["shadow"] as const;
export type ShadowPropsType = {
  shadow?: Array<Omit<BoxShadowValue, "color"> & { color: ThemeColors }>;
};

export const borderProps = [
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor",
  "borderWidth",
  "borderTopWidth",
  "borderRightWidth",
  "borderLeftWidth",
  "borderBottomWidth",
  "borderStyle",
] as const;
export type BorderPropsType = {
  borderColor?: ThemeColors;
  borderTopColor?: ThemeColors;
  borderRightColor?: ThemeColors;
  borderBottomColor?: ThemeColors;
  borderLeftColor?: ThemeColors;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
  borderStyle?: ViewStyle["borderStyle"];
};

export const spacingProps = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
] as const;
export type SpacingPropsType = {
  m?: ThemeSpacing;
  mt?: ThemeSpacing;
  mr?: ThemeSpacing;
  mb?: ThemeSpacing;
  ml?: ThemeSpacing;
  mx?: ThemeSpacing;
  my?: ThemeSpacing;
  p?: ThemeSpacing;
  pt?: ThemeSpacing;
  pr?: ThemeSpacing;
  pb?: ThemeSpacing;
  pl?: ThemeSpacing;
  px?: ThemeSpacing;
  py?: ThemeSpacing;
};

export const roundedProps = [
  "rounded",
  "roundedTopLeft",
  "roundedTopRight",
  "roundedBottomLeft",
  "roundedBottomRight",
  "roundedTop",
  "roundedLeft",
  "roundedRight",
  "roundedBottom",
] as const;
export type RoundedPropsType = {
  rounded?: ThemeRadius;
  roundedTopLeft?: ThemeRadius;
  roundedTopRight?: ThemeRadius;
  roundedBottomLeft?: ThemeRadius;
  roundedBottomRight?: ThemeRadius;
  roundedTop?: ThemeRadius;
  roundedLeft?: ThemeRadius;
  roundedRight?: ThemeRadius;
  roundedBottom?: ThemeRadius;
};

export const dimensionProps = [
  "minH",
  "minW",
  "maxH",
  "maxW",
  "h",
  "w",
  "size",
  "aspectRatio",
] as const;
export type DimensionPropsType = {
  minH?: ViewStyle["minHeight"];
  minW?: ViewStyle["minWidth"];
  maxH?: ViewStyle["maxHeight"];
  maxW?: ViewStyle["maxWidth"];
  h?: ViewStyle["height"];
  w?: ViewStyle["width"];
  size?: ViewStyle["width"] | ViewStyle["height"];
  aspectRatio?: ViewStyle["aspectRatio"];
};

export const flexProps = [
  "flex",
  "flexGrow",
  "flexShrink",
  "flexDirection",
  "gap",
  "columnGap",
  "rowGap",
  "flexWrap",
  "justifyContent",
  "alignSelf",
  "alignItems",
] as const;
export type FlexPropsType = {
  flex?: ViewStyle["flex"];
  flexGrow?: ViewStyle["flexGrow"];
  flexShrink?: ViewStyle["flexShrink"];
  flexDirection?: ViewStyle["flexDirection"];
  gap?: ThemeSpacing;
  columnGap?: ThemeSpacing;
  rowGap?: ThemeSpacing;
  flexWrap?: ViewStyle["flexWrap"];
  justifyContent?: ViewStyle["justifyContent"];
  alignSelf?: ViewStyle["alignSelf"];
  alignItems?: ViewStyle["alignItems"];
};

export const positionProps = [
  "position",
  "top",
  "right",
  "bottom",
  "left",
] as const;
export type PositionPropsType<T extends { position?: string } = ViewStyle> = {
  position?: T["position"];
  top?: ThemePosition;
  right?: ThemePosition;
  bottom?: ThemePosition;
  left?: ThemePosition;
};

export const backgroundProps = ["bgColor"] as const;
export type BackgroundPropsType = {
  bgColor?: ThemeColors;
};

export const textInputProps = [
  "placeholderTextColor",
  "selectionColor",
  "selectionHandleColor",
  "cursorColor",
] as const;
export type TextInputPropsType = {
  placeholderTextColor?: ThemeColors;
  selectionColor?: ThemeColors;
  selectionHandleColor?: ThemeColors;
  cursorColor?: ThemeColors;
};

export const textProps = [
  "color",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "fontFamily",
  "lineHeight",
  "textAlign",
  "textTransform",
  "letterSpacing",
  "textAlignVertical",
  "textDecorationLine",
  "textDecorationStyle",
  "textDecorationColor",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
] as const;
export type TextPropsType = {
  color?: ThemeColors;
  fontSize?: ThemeFontSize;
  fontStyle?: TextStyle["fontStyle"];
  textDecorationLine?: TextStyle["textDecorationLine"];
  textDecorationColor?: ThemeColors;
  textDecorationStyle?: TextStyle["textDecorationStyle"];
  fontWeight?: ThemeFontWeight;
  fontFamily?: ThemeFontFamily;
  lineHeight?: number;
  textAlign?: TextStyle["textAlign"];
  textTransform?: TextStyle["textTransform"];
  letterSpacing?: number;
  textAlignVertical?: TextStyle["textAlignVertical"];
  textShadowColor?: ThemeColors;
  textShadowOffset?: TextStyle["textShadowOffset"];
  textShadowRadius?: TextStyle["textShadowRadius"];
};

export const opacityProps = ["opacity"] as const;
export type OpacityPropsType = {
  opacity?: number;
};

export const overflowProps = ["overflow"] as const;
export type OverflowPropsType<
  T extends { overflow?: LiteralUnion<"visible" | "hidden"> } = ViewStyle,
> = {
  overflow?: T["overflow"];
};

export const zIndexProps = ["zIndex"] as const;
export type ZIndexPropsType = {
  zIndex?: number;
};
