import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLooksOne = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-612v300q0 14.875 10.37 24.938Q501.74-277 517.07-277q14.905 0 24.917-10.35Q552-297.7 552-313v-323q0-19.75-13.625-33.375T505-683h-72q-14.875 0-24.938 10.088-10.062 10.087-10.062 25Q398-633 408.35-622.5 418.7-612 434-612zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
