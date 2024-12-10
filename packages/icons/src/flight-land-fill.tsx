import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlightLandFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M771-317 129-495q-15-4-24.5-17T95-541v-169q0-15 12-23.5t26-3.5l17 5q7 2 11.5 7.5T169-713l26 82 197 54v-279q0-19 14-30.5t33-7.5l20 5q10 2 17 9t11 17l109 344 214 61q24 6 40 26t16 45q0 37-29.5 58.5T771-317M142-95q-20 0-33.5-13.5T95-143q0-20 13.5-33.5T143-190h675q20 0 34 14t14 34q0 20-14 33.5T818-95z" />
  </Svg>
);
