import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEcgHeartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M645-855q105 0 177.5 77.5T895-590q0 19-2.5 37t-7.5 35H615l-60-93q-6-9-15-14t-20-5q-14 0-24.5 8T480-601l-53 151-32-49q-6-9-15-14t-20-5H75q-5-17-7.5-35T65-589q0-111 72.5-188.5T314-855q46 0 89 17t77 49q34-32 76.5-49t88.5-17M480-105q-22 0-41-8t-33-23L138-405q-7-6-13-13t-11-15h231l60 93q6 9 14.5 14t19.5 5q14 0 25-8t16-21l53-151 32 48q6 9 15 14.5t20 5.5h246q-6 7-11.5 14T823-406L554-136q-15 15-34 23t-40 8" />
  </Svg>
);
