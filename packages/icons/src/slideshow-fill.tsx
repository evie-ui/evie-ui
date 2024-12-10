import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSlideshowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M628-460q11-6 11-19.821 0-13.822-11-21.179L418-636q-13-7-25-.5T381-616v272q0 14 12 20.5t25-.5zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
