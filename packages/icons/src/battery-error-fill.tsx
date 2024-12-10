import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBatteryErrorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M297-55q-21 0-34.5-13.5T249-102v-692q0-20 13.5-34t34.5-14h86v-16q0-20 13.5-34t33.5-14h100q20 0 33.5 14t13.5 34v16h87q20 0 33.5 14t13.5 34v363q-83 13-137.5 76.5T519-206q0 42 14 81t41 70zm459-82-51 51q-15 13-33.5 13T639-87q-15-14-15-33t15-34l50-50-51-51q-15-14-14.5-33t15.5-34q14-14 33-14t33 14l51 51 51-51q14-14 33-13.5t33 14.5q14 14 14 33t-14 33l-50 51 50 51q14 14 14 33t-14 33q-15 14-33.5 14T807-86z" />
  </Svg>
);
