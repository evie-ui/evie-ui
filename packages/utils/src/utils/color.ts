"worklet";

import { NumberHelpers } from "./number";

export type Hex = `#${string}`;
export type Rgba = { r: number; g: number; b: number; a: number };

const _hexRgbaToDecimalRgba = (rgba: string): number => {
  const decimal = Number.parseInt(rgba, 16);
  return Number.isNaN(decimal) ? 0 : decimal;
};

const _componentToHex = (c: number): string => {
  const hex = Math.round(c).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const rgbaToHex = ({ r, g, b, a }: Rgba): Hex => {
  return `#${_componentToHex(r)}${_componentToHex(g)}${_componentToHex(b)}${_componentToHex(a)}`;
};

// credits go to https://stackoverflow.com/a/5624139/491075
export const hexToRgbaObject = (hex: Hex): Rgba => {
  const hexWithoutHash = hex.replace("#", "");

  if (hexWithoutHash.length === 3) {
    const [first, second, third] = hexWithoutHash;
    hex = `#${first}${first}${second}${second}${third}${third}ff`;
  } else if (hexWithoutHash.length === 8) {
    hex = `#${hexWithoutHash}`;
  } else {
    hex = `#${hexWithoutHash}ff`;
  }

  const [_, r, g, b, a] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) ?? [];

  return {
    r: _hexRgbaToDecimalRgba(r),
    g: _hexRgbaToDecimalRgba(g),
    b: _hexRgbaToDecimalRgba(b),
    a: _hexRgbaToDecimalRgba(a),
  };
};

export const hexToRgbaString = (hex: Hex, alpha?: number): string => {
  const { r, g, b, a } = hexToRgbaObject(hex);
  return rgbaToHex({ r, g, b, a: alpha !== undefined ? NumberHelpers.clamp(alpha, { min: 0, max: 1 }) * 255 : a });
};

// adapted from https://stackoverflow.com/a/3943023/491075
export const isDarkColor = (hex: Hex): boolean => {
  const { r, g, b } = hexToRgbaObject(hex);

  const colorArray = [r / 255, g / 255, b / 255].map((v) => {
    if (v <= 0.03928) return v / 12.92;
    return ((v + 0.055) / 1.055) ** 2.4;
  });

  const luminance = 0.2126 * colorArray[0] + 0.7152 * colorArray[1] + 0.0722 * colorArray[2];
  return luminance <= 0.179;
};
