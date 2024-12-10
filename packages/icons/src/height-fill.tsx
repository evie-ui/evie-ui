import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHeightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-276v-409l-53 51q-14 15-33 15t-33-14q-15-14-15-33t15-34l132-132q7-7 16-11t18-4q9 0 18 4t16 11l133 133q14 14 14 33.5T646-632q-14 14-33.5 14T580-632l-53-53v409l54-51q14-14 33-14t33 14q14 14 14 33t-14 33L514-128q-7 7-16 11t-18 4q-9 0-18-4t-16-11L314-261q-14-14-14-33t14-33q14-15 32.5-14.5T380-327z" />
  </Svg>
);
