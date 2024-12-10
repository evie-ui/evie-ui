import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHeadphonesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M255-97h-66q-39 0-66.5-27.5T95-191v-289q0-80 30-150t82.5-122.5Q260-805 330-835.5T480-866q80 0 150 30.5t122.5 83Q805-700 835.5-630T866-480v289q0 39-28 66.5T771-97h-65q-39.75 0-67.375-27.625T611-191v-154q0-38.75 27.625-66.375T706-439h65v-41q0-121.357-84.821-206.179Q601.357-771 480-771t-206.179 84.821Q189-601.357 189-480v41h66q38.75 0 66.375 27.625T349-345v154q0 38.75-27.625 66.375T255-97" />
  </Svg>
);
