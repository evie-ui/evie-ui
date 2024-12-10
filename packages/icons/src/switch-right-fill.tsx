import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSwitchRightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M601-194q-17 0-32-12.5T554-241v-479q0-21 15-33.5t32-12.5q8 0 17 3t16 10l240 239q7 7 11 16t4 18q0 9-4 18t-11 16L634-208q-7 8-16 11t-17 3m55-177 108-109-108-109zM359-194q-8 0-17-3t-16-11L86-446q-7-7-11-16t-4-18q0-9 4-18t11-16l240-239q7-7 16-10t17-3q17 0 32 12.5t15 33.5v479q0 22-15 34.5T359-194" />
  </Svg>
);
