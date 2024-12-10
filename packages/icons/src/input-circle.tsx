import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInputCircle = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-449v347q0 21 13.5 34.5T480-54q20 0 33.5-13.5T527-102v-347l64 63q14 14 33 13.5t33-13.5q15-14 15-33t-15-34L514-596q-14-14-34-14t-34 14L302-452q-14 14-13.5 33t14.5 33q14 15 33 15t33-15zm47-349q-132 0-224.5 93T163-480q0 27 4.5 53t15.5 51q6 22 2.5 43.5T164-301q-17 10-34.5 7T106-313q-19-39-28.5-81T68-480q0-85 32.5-160.5t88-131q55.5-55.5 131-88T480-892q85 0 160.5 32.5t131 88q55.5 55.5 88 131T892-480q0 43-9 84t-27 79q-7 16-24 20.5t-35-4.5q-20-10-23-31.5t4-44.5q9-24 14.5-49.5T798-480q0-132-93-225t-225-93" />
  </Svg>
);