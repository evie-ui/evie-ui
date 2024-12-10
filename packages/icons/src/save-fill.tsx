import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSaveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h465q19.444 0 37.222 8Q709-850 722-837l115 115q13 13 21 30.778T866-654v465q0 39-28 66.5T771-95zm290.765-159Q523-254 553.5-284.265q30.5-30.264 30.5-73.5Q584-401 553.735-431.5q-30.264-30.5-73.5-30.5Q437-462 406.5-431.735q-30.5 30.264-30.5 73.5Q376-315 406.265-284.5q30.264 30.5 73.5 30.5M289-575h264q19.75 0 33.375-13.625T600-622v-49q0-19.75-13.625-33.375T553-718H289q-19.75 0-33.375 13.625T242-671v49q0 19.75 13.625 33.375T289-575" />
  </Svg>
);
