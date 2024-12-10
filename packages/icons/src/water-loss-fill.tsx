import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWaterLossFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M248-372q46-22 96-34t99-12q32 0 63 4.5t60 12.5q48 13 73.5 18t52.5 6h21l47-434H200zm26 317q-36 0-63.5-24T180-138l-73-651q-5-47 26.5-82t78.5-35h536q47 0 78.5 35t26.5 82l-72 651q-4 35-31 59t-63 24z" />
  </Svg>
);
