import type { LiteralUnion, Percentage } from "@evie-ui/types";
import type { Hex } from "@evie-ui/utils/color";
import type {
  Colors,
  FontFamilies,
  FontSizes,
  Radii,
  Spacings,
} from "../extend-theme";

export type DefaultProps<Props> = Omit<Props, "children">;

export interface Theme {
  name: string;
  colors: Colors;
  fontFamily: FontFamilies;
  fontSize: FontSizes;
  spacing: Spacings;
  radius: Radii;
}

export type ThemeWithGetToken = {
  getName: () => string;
  getColor: <Token extends LiteralUnion<keyof Colors> | null | undefined>(
    token: Token
  ) => Token extends string ? Hex : string | undefined;

  getSpacing: <
    Token extends LiteralUnion<keyof Spacings> | Percentage | null | undefined,
  >(
    token: Token
  ) => number | undefined;

  getPosition: <
    Token extends LiteralUnion<keyof Spacings> | Percentage | null | undefined,
  >(
    token: Token
  ) => Percentage | number | undefined;

  getRadius: <
    Token extends LiteralUnion<keyof Radii> | "none" | null | undefined,
  >(
    token: Token
  ) => Token extends number ? number : number | undefined;

  getFontSize: <
    Token extends LiteralUnion<keyof FontSizes> | Percentage | null | undefined,
  >(
    token: Token
  ) => Token extends number ? number : number | undefined;

  getFontFamily: <
    Token extends LiteralUnion<keyof FontFamilies> | null | undefined,
  >(
    token: Token,
    fontWeight: keyof FontFamilies[keyof FontFamilies]
  ) => Token extends string ? string : string | undefined;
};
