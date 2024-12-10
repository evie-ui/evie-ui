import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLocationOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-79q-13 0-26.5-4.5T430-97q-48-40-100-90.5t-95.5-109Q191-355 163-420.5T135-555q0-42 7-79t22-71L47-823q-10-10-10.5-24.5T47-873q11-11 25.5-11T98-873l773 772q10 11 9.5 25T869-51q-11 11-25 11t-24-11L654-216q-28 30-59.5 60.5T531-97q-11 9-24.5 13.5T480-79m266-247L545-527q5-6 9-14.5t4-18.5q0-33-22.5-55.5T480-638q-10 0-18.5 4t-14.5 9L252-819q47-42 105.5-64.5T480-906q136 0 241 95.5T826-555q0 56-19.5 112.5T746-326" />
  </Svg>
);