import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCottageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M140-203v-307l-44 34q-14 11-31.5 9T36-483q-10-13-7.5-30.5T45-541l95-73v-83q0-17 12-29t32-12q17 0 28 11t11 28v21l200-151q13-9 27-14.5t29-5.5q16 0 29.5 5.5T536-829l378 289q14 10 16 27.5t-8 30.5q-11 14-27 15.5t-30-8.5l-46-35v307q0 39-27.5 66.5T724-109H542q-10 0-17-7t-7-16v-178q0-18-11.5-29.5T477-351q-18 0-30 12t-12 30v177q0 9-7 16t-16 7H234q-39 0-66.5-27.5T140-203m47-585q-20 0-32-14t-7-31q16-47 55-76t87-29q18 0 33-8t23-24q9-13 21-24t28-11q19 0 30.5 14.5T432-959q-16 47-55 75.5T290-855q-17 0-31.5 9.5T234-822q-8 14-20 24t-27 10" />
  </Svg>
);
