import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAccountBoxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481.879-386Q543-386 584.5-427.379q41.5-41.379 41.5-102.5T584.621-632q-41.379-41-102.5-41T379.5-632.121q-41.5 40.879-41.5 102T379.379-427.5q41.379 41.5 102.5 41.5M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-54q-60-52-131.5-82.5T480-356q-88 0-159.5 31.5T189-241z" />
  </Svg>
);
