import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgViewList = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M102-271v-419q0-38.775 27.637-66.387Q157.275-784 197-784h567q38.775 0 66.387 27.613Q858-728.775 858-690v419q0 39.725-27.613 67.363Q802.775-176 764-176H197q-39.725 0-67.363-27.637Q102-231.275 102-271m95-318h99v-101h-99zm159 0h408v-101H356zm0 158h408v-98H356zm0 160h408v-100H356zm-159 0h99v-100h-99zm0-160h99v-98h-99z" />
  </Svg>
);
