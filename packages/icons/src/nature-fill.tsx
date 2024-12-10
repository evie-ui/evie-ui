import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNatureFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-151v-150h-73q-94 0-159.5-65.5T135-526q0-64 33-118.5t91-82.5q14-80 76.5-132T480-911q82 0 144.5 52T701-727q58 28 91.5 82.5T826-526q0 94-66 159.5T600-301h-73v150h189q19.75 0 33.375 13.675Q763-123.649 763-103.825 763-84 749.375-70.5 735.75-57 716-57H254q-19.75 0-33.375-13.675Q207-84.351 207-104.175 207-124 220.625-137.5 234.25-151 254-151z" />
  </Svg>
);
