import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgComputerFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M52.755-83Q37-83 27-93.425 17-103.85 17-119q0-15.575 10-25.788Q37-155 52.755-155h854.49Q923-155 933-144.904q10 10.097 10 25.5Q943-104 933-93.5T907.245-83zM149-215q-39.05 0-66.525-27.475Q55-269.95 55-309v-462q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v462q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);
