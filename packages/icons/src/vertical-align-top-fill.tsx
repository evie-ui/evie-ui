import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgVerticalAlignTopFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-771q-20 0-33.5-13.5T135-818q0-20 13.5-34t33.5-14h596q20 0 34 14t14 34q0 20-14 33.5T778-771zM480-95q-20 0-33.5-13.5T433-142v-391l-71 71q-14 14-33.5 14T295-462q-14-14-14-33.5t14-33.5l151-151q7-7 16-11t18-4q9 0 18 4t16 11l146 146q14 14 14 33.5T660-467q-14 14-33 14.5T594-466l-67-67v391q0 20-13.5 33.5T480-95" />
  </Svg>
);
