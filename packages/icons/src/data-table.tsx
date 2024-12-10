import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDataTable = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-521h582v-155H189zm0 212h582v-152H189zm0 215h582v-155H189zm88.719-478Q267-667 260-674.675q-7-7.676-7-18.395t6.95-18.325Q266.901-719 278.07-719q10.719 0 18.825 7.556Q305-703.889 305-692.719q0 10.719-8.281 18.219-8.28 7.5-19 7.5m0 213Q267-454 259.5-461.675q-7.5-7.676-7.5-18.5 0-10.825 7.675-18.325 7.676-7.5 18.395-7.5t18.825 7.675q8.105 7.676 8.105 18.5 0 10.825-8.281 18.325-8.28 7.5-19 7.5m0 213Q267-241 260-248.675q-7-7.676-7-19Q253-279 259.95-286q6.951-7 18.12-7 10.719 0 18.825 6.95Q305-279.099 305-267.325q0 11.325-8.281 18.825-8.28 7.5-19 7.5" />
  </Svg>
);