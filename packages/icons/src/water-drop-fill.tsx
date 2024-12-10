import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWaterDropFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-55q-148 0-246.5-101T135-408q0-54 21.5-110.5t61-115Q257-692 312-752t121-120q11-9 22.5-13t24.5-4q13 0 24.5 4t22.5 13q66 60 121 120t94.5 118.5Q782-575 804-518.5T826-408q0 151-99 252T480-55m1-157q19 0 30.5-8t11.5-21q0-14-11-22.5t-32-8.5q-47 0-80.5-25.5T355-378q-2-10-10.5-18t-20.5-8q-16 0-23.5 10.5T295-371q15 85 71 122t115 37" />
  </Svg>
);
