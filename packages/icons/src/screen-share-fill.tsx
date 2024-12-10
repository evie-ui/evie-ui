import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScreenShareFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M449-527h75v49q0 8.083 7 11.042 7 2.958 14.25-3.292l75.65-75.65q6.1-7.282 6.1-17.373 0-10.091-6-16.727l-75.745-75.745Q538-662 531-659.042q-7 2.959-7 11.042v49h-75q-51.5 0-86.75 35.396T327-476.5v59.5q0 14.9 10.175 25.45 10.176 10.55 26 10.55Q379-381 389-391.125T399-417v-60q0-20.65 14.675-35.325Q428.35-527 449-527M52.755-83q-15.505 0-25.63-10.6Q17-104.201 17-119.175q0-15.4 10.125-25.613Q37.25-155 52.755-155h854.49q15.505 0 25.63 10.272Q943-134.456 943-119.228T932.875-93.5Q922.75-83 907.245-83zM149-215q-39.05 0-66.525-27.475Q55-269.95 55-309v-462q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v462q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);