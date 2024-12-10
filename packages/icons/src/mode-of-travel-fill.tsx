import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgModeOfTravelFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M488-76q-13 0-26.5-4.5T438-94q-47-40-99-90.5t-95.5-109q-43.5-58.5-72-124T143-552q0-157 102-251t235-94q148 0 240 92.5T820-562l67-67q11-11 25-10.5t25 11.5q11 11 11 24.5T937-579L806-446q-14 14-34 14t-34-14L607-579q-11-10-11-24t12-26q10-11 24-11t25 11l72 71q-6-105-71.5-175T480-803q-101 0-172 71t-71 180q0 77 58 170.5T480-182q13-13 31-30.5t32-31.5q-5-11-7.5-22.5T533-287q0-45 31.5-76t75.5-31q45 0 76 31t31 76q0 45-31 76t-76 31q-6 0-11.5-.5T615-183q-17 17-34 36t-42 53q-11 9-24 13.5T488-76" />
  </Svg>
);
