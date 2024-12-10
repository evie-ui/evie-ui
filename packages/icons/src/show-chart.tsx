import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShowChart = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M91-231q-14-14-14-35t14-35l222-222q28-28 66.5-28t66.5 28l93 92 266-298q13-15 32.5-16.5T871-733q14 13 15 32.5T875-667L608-365q-27 31-68 32t-70-28l-90-89-219 219q-14 14-35 14t-35-14" />
  </Svg>
);
