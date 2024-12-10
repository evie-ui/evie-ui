import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgExpandFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-20q-20 0-33.5-13.5T135-67q0-20 13.5-34t33.5-14h596q20 0 34 14t14 34q0 20-14 33.5T778-20zm300-153q-9 0-18-4t-16-11L339-298q-12-12-11.5-29t13.5-29q12-13 29-12.5t29 12.5l42 43v-335l-43 43q-13 13-29 13t-28-13q-13-12-13-29t13-29l107-109q7-7 16-11t18-4q9 0 18 4t16 11l109 109q12 13 12 29.5T624-605q-12 13-29 12.5T566-606l-43-42v335l43-43q13-12 29.5-12t28.5 13q13 12 13 29t-13 29L516-188q-7 7-16 11t-18 4M182-846q-20 0-33.5-13.5T135-893q0-20 13.5-33.5T182-940h596q20 0 34 13.5t14 33.5q0 20-14 33.5T778-846z" />
  </Svg>
);
