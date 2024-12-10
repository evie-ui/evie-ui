import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCooking = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M367-62v-145H34v-82h322q38.75 0 66.375 27.625T450-195v133zm143 0v-133q0-38.75 27.394-66.375Q564.787-289 605-289h321v82H593v145zM202-349q-54.167 0-92.083-38.208Q72-425.417 72-480v-206h816v205.619q0 54.881-37.917 93.131Q812.167-349 758-349zm0-83h556q20.25 0 34.125-13.875T806-480v-122H155v122q0 20.25 13.375 34.125T202-432M72-726v-82h277v-43q0-19.75 13.625-33.375T396-898h168q19.75 0 33.375 13.625T611-851v43h277v82zm83 294v-170z" />
  </Svg>
);
