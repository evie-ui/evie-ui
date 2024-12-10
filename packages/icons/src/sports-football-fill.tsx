import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsFootballFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M397-106q-125 18-193.5 4.5T127-129q-16-12-27.5-81t6.5-187zm116-18L124-514q15-59 43.5-111.5T239-720q42-42 96-71t114-46l388 389q-17 60-46.5 114T721-240q-41 41-93 70t-115 46m-96-227 192-192q14-14 14-33t-14-33q-14-14-33-14t-33 14L351-417q-14 14-14 33t14 33q14 14 33 14t33-14m438-213L565-855q127-17 192-3t76 27q12 8 26.5 78T855-564" />
  </Svg>
);
