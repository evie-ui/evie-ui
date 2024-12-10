import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNorthFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-55q-20 0-33.5-13.5T433-102v-624L274-566q-15 15-34 15t-32-15q-15-14-15-32.5t15-33.5l239-239q7-7 15.5-10.5T480-885q9 0 18 3.5t16 10.5l239 239q14 15 14.5 33.5T753-566q-14 15-33 15t-33-15L527-726v624q0 20-13.5 33.5T480-55" />
  </Svg>
);
