import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDeployedCodeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-66 142-233q-23.25-13.426-35.125-35.42T95-315v-330q0-24.586 11.875-46.58T142-727l291-168q22.328-12 47.164-12Q505-907 527-895l291 168q23.25 13.426 35.625 35.42T866-645v330q0 24.586-12.375 46.58T818-233L527-66q-22.328 13-47.164 13Q455-53 433-66m4-389.625V-173l43 25 44-25v-282.787L771-600v-44.985L723-672 480-530 236-672l-47 26.672V-599z" />
  </Svg>
);