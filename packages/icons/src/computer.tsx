import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgComputer = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M52.755-83q-15.905 0-25.83-10.4Q17-103.801 17-119.175q0-15.375 9.925-25.6Q36.85-155 52.755-155h854.49q15.905 0 25.83 10.289 9.925 10.29 9.925 25.5Q943-104 933.075-93.5 923.15-83 907.245-83zM149-215q-39.05 0-66.525-27.475Q55-269.95 55-309v-462q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v462q0 39.05-27.769 66.525Q850.463-215 811-215zm0-94h662v-462H149zm0 0v-462z" />
  </Svg>
);
