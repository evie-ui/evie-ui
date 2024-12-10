import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextDecrease = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M654-439q-17.3 0-29.15-11.789-11.85-11.79-11.85-29Q613-497 624.85-509T654-521h245q17.3 0 29.15 11.789 11.85 11.79 11.85 29Q940-463 928.15-451T899-439zM183-339l-43 108q-5 13-17.5 22T96-200q-28.24 0-43.12-22Q38-244 49-270l195-458q6-14 18.429-23 12.428-9 28.178-9h44.786q14.661 0 28.134 9T383-727l187 456q11 26-4.34 48.5T523-200q-18.372 0-31.477-9.433Q478.419-218.867 472-235l-39-104zm27-75h196l-94.86-252H307z" />
  </Svg>
);
