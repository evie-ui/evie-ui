import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFullStackedBarChartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M192-143q-19.75 0-33.375-13.625T145-190v-88h170v88q0 20-13.625 33.5T268-143zm-47-195v-134h170v134zm0-194v-238q0-20 13.625-33.5T192-817h76q19.75 0 33.375 13.625T315-770v238zm297 389q-19.75 0-33.375-13.625T395-190v-239h170v239q0 20-13.625 33.5T518-143zm-47-346v-134h170v134zm0-194v-87q0-20 13.625-33.5T442-817h76q19.75 0 33.375 13.625T565-770v87zm297 540q-19.75 0-33.375-13.625T645-190v-35h170v35.175Q815-170 801.375-156.5 787.75-143 768-143zm-47-152v-134h170v134zm0-194v-281q0-20 13.625-33.5T692-817h76q19.75 0 33.375 13.625T815-770v281z" />
  </Svg>
);
