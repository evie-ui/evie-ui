import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSkipPrevious = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M173-240v-480q0-19.75 13.675-33.375Q200.351-767 220.175-767 240-767 253.5-753.375 267-739.75 267-720v480q0 19.75-13.675 33.375Q239.649-193 219.825-193 200-193 186.5-206.625 173-220.25 173-240m540-4L428-441q-11-7-16-17.296-5-10.297-5-21.704t5-21.704Q417-512 428-519l285-197q6-4 13-6.5t14-2.5q19 0 33 13.25T787-678v396q0 20.5-14 33.75T740-235q-7 0-14-2.5t-13-6.5m-20-128v-216L537-480z" />
  </Svg>
);
