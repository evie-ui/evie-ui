import { type Hex, type Rgba, isDarkColor } from "./color";
import { StringHelpers } from "./string";

const DEFAULT_PALETTE_CONFIG = {
  h: 0,
  s: 0,
  lMin: 0,
  lMax: 100,
  swatches: [],
};

interface SwatchValue {
  hex: Hex;
  stop: number;
  h: number;
  hScale: number;
  s: number;
  sScale: number;
  l: number;
}

interface PaletteConfig {
  value: Hex;
  swatches: SwatchValue[];
  h: number;
  s: number;
  lMin: number;
  lMax: number;
}

interface PaletteOutput {
  [key: number]: Hex;
}

const round = (value: number, precision: number) => {
  const multiplier = 10 ** precision;
  return Math.round(value * multiplier) / multiplier;
};

const createDistributionValues = (min: number, max: number, lightness: number) => {
  // A `0` swatch (lightest color) would have this lightness
  const maxLightness = max ?? 100;
  const maxStep = round((maxLightness - lightness) / 5, 2);

  // A `1000` swatch (darkest color) would have this lightness
  const minLightness = min ?? 0;
  const minStep = round((lightness - minLightness) / 5, 2);

  const values = [
    { key: 0, tweak: Math.round(lightness + maxStep * 5) }, // Closest to 100, lightest colour
    { key: 50, tweak: Math.round(lightness + maxStep * 4.5) },
    { key: 100, tweak: Math.round(lightness + maxStep * 4) },
    { key: 200, tweak: Math.round(lightness + maxStep * 3) },
    { key: 300, tweak: Math.round(lightness + maxStep * 2) },
    { key: 400, tweak: Math.round(lightness + maxStep * 1) },
    { key: 500, tweak: Math.round(lightness) }, // Lightness of original colour
    { key: 600, tweak: Math.round(lightness - minStep * 1) },
    { key: 700, tweak: Math.round(lightness - minStep * 2) },
    { key: 800, tweak: Math.round(lightness - minStep * 3) },
    { key: 900, tweak: Math.round(lightness - minStep * 4) },
    { key: 1000, tweak: Math.round(lightness - minStep * 5) }, // Closest to 0, darkest colour
  ];

  // Each 'tweak' value must be between 0 and 100
  const safeValues = values.map((value) => ({
    ...values,
    tweak: Math.min(Math.max(value.tweak, 0), 100),
  }));

  return safeValues;
};

const hexToHSL = (H: Hex) => {
  if (H.length === 6 && !H.startsWith("#")) H = `#${H}`;

  // Convert hex to RGB first
  let { r, g, b } = hexToRGB(H);
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
};

const hexToRGB = (H: Hex): Rgba => {
  if (H.length === 6 && !H.startsWith("#")) H = `#${H}`;

  let r = "0";
  let g = "0";
  let b = "0";
  if (H.length === 4) {
    r = `0x${H[1]}${H[1]}`;
    g = `0x${H[2]}${H[2]}`;
    b = `0x${H[3]}${H[3]}`;
  } else if (H.length === 7) {
    r = `0x${H[1]}${H[2]}`;
    g = `0x${H[3]}${H[4]}`;
    b = `0x${H[5]}${H[6]}`;
  }

  return { r: Number.parseInt(r, 16), g: Number.parseInt(g, 16), b: Number.parseInt(b, 16), a: 1 };
};

const HSLToHex = (h: number, s: number, l: number): Hex => {
  const { r, g, b } = HSLtoRGB(h, s, l);

  // Having obtained RGB, convert channels to hex
  let hexR = r.toString(16);
  let hexG = g.toString(16);
  let hexB = b.toString(16);

  // Prepend 0s, if necessary
  if (hexR.length === 1) hexR = `0${hexR}`;
  if (hexG.length === 1) hexG = `0${hexG}`;
  if (hexB.length === 1) hexB = `0${hexB}`;

  return `#${hexR}${hexG}${hexB}`;
};

const HSLtoRGB = (h: number, s: number, l: number) => {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
};

const luminanceFromRGB = (rgb: { r: number; g: number; b: number }) => {
  // Formula from WCAG 2.0
  const [R, G, B] = [rgb.r, rgb.g, rgb.b].map((c) => {
    c /= 255; // to 0-1 range
    return c < 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 21.26 * R + 71.52 * G + 7.22 * B;
};

const luminanceFromHex = (H: Hex) => {
  return round(luminanceFromRGB(hexToRGB(H)), 2);
};

const lightnessFromHSLum = (H: number, S: number, Lum: number) => {
  const vals: Record<number, number> = {};
  for (let L = 99; L >= 0; L--) {
    vals[L] = Math.abs(Lum - luminanceFromRGB(HSLtoRGB(H, S, L)));
  }

  // Run through all these and find the closest to 0
  let lowestDiff = 100;
  let newL = 100;
  for (let i = Object.keys(vals).length - 1; i >= 0; i--) {
    if (vals[i] < lowestDiff) {
      newL = i;
      lowestDiff = vals[i];
    }
  }

  return newL;
};

// Checks if value starts with hash - adds hash if missing
const checkHash = (value: string): Hex => {
  const valueHex = !value.startsWith("#") ? `#${value}` : value;
  return valueHex as Hex;
};

const output = (palette: PaletteConfig) => {
  const swatches: Record<number, Hex> = {};

  for (const swatch of palette.swatches.filter((swatch) => ![0, 1000].includes(swatch.stop))) {
    Object.assign(swatches, { [swatch.stop]: swatch.hex.toUpperCase() });
  }

  return swatches;
};

const createSaturationScale = (tweak: number) => {
  return [
    { key: 0, tweak: Math.round(tweak * 1.15) },
    { key: 50, tweak: Math.round(tweak * 1.125) },
    { key: 100, tweak: Math.round(tweak) },
    { key: 200, tweak: Math.round(tweak * 0.75) },
    { key: 300, tweak: Math.round(tweak * 0.5) },
    { key: 400, tweak: Math.round(tweak * 0.25) },
    { key: 500, tweak: 0 },
    { key: 600, tweak: Math.round(tweak * 0.25) },
    { key: 700, tweak: Math.round(tweak * 0.5) },
    { key: 800, tweak: Math.round(tweak * 0.75) },
    { key: 900, tweak: Math.round(tweak) },
    { key: 1000, tweak: Math.round(tweak) * 1.25 },
  ];
};
const createHueScale = (tweak: number) => {
  return [
    { key: 0, tweak: tweak ? tweak * 4 + tweak : 0 },
    { key: 50, tweak: tweak ? tweak * 3.5 + tweak : 0 },
    { key: 100, tweak: tweak ? tweak * 3 + tweak : 0 },
    { key: 200, tweak: tweak ? tweak * 2 + tweak : 0 },
    { key: 300, tweak: tweak ? tweak * 1 + tweak : 0 },
    { key: 400, tweak: tweak ? tweak + 0 : 0 },
    { key: 500, tweak: 0 },
    { key: 600, tweak: tweak || 0 },
    { key: 700, tweak: tweak ? tweak * 1 + tweak : 0 },
    { key: 800, tweak: tweak ? tweak * 2 + tweak : 0 },
    { key: 900, tweak: tweak ? tweak * 3 + tweak : 0 },
    { key: 1000, tweak: tweak ? tweak * 4 + tweak : 0 },
  ];
};

const createSwatches = (palette: PaletteConfig) => {
  const { value } = palette;

  const hueScale = createHueScale(palette.h);
  const saturationScale = createSaturationScale(palette.s);

  const { h: valueH, s: valueS } = hexToHSL(value);

  const lightnessValue = luminanceFromHex(value);
  const distributionScale = createDistributionValues(palette.lMin, palette.lMax, lightnessValue);

  const swatches = hueScale.map(({ key }, i) => {
    let newH = valueH + hueScale[i].tweak;
    newH = newH < 0 ? 360 + newH - 1 : newH;
    newH = newH > 720 ? newH - 360 : newH;
    newH = newH > 360 ? newH - 360 : newH;

    let newS = valueS + saturationScale[i].tweak;
    newS = newS > 100 ? 100 : newS;

    const newL = lightnessFromHSLum(newH, newS, distributionScale[i].tweak);

    const newHex = HSLToHex(newH, newS, newL);
    const paletteI = key;

    return {
      stop: paletteI,
      hex: newHex,
      h: newH,
      hScale: hueScale[i].tweak,
      s: newS,
      sScale: saturationScale[i].tweak,
      l: newL,
    };
  });

  return swatches;
};

export const createPaletteFromColor = (baseColor: Hex): PaletteOutput => {
  const nameValue = { ...DEFAULT_PALETTE_CONFIG, value: baseColor };
  return output({ ...nameValue, swatches: createSwatches(nameValue) });
};

export const createVariationsFromPalette = <
  Name extends string,
  CapitalizedName extends Capitalize<Name>,
  ReturnType = Record<Name | `on${CapitalizedName}` | `on${CapitalizedName}Variant`, Hex>,
>(
  palette: PaletteOutput,
  name: Name,
): ReturnType => {
  const createName = (...name: string[]) =>
    name.map((word, index) => (index === 0 ? word : StringHelpers.capitalize(word))).join("");

  const base = palette[500];
  const isBaseColorDark = isDarkColor(base);

  return {
    [name]: base,
    [createName("on", name)]: isBaseColorDark ? palette[50] : palette[1000],
    [createName("on", name, "variant")]: isBaseColorDark ? palette[100] : palette[900],
  } as ReturnType;
};
export const createColorVariations = <Name extends string, CapitalizedName extends Capitalize<Name>>(
  name: Name,
  colors: Record<Name | `on${CapitalizedName}` | `on${CapitalizedName}Variant`, Hex>,
) => colors;
