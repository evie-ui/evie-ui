import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStackedInbox = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M256-246q-39.462 0-67.231-27.769Q161-301.538 161-341v-433q0-39.463 27.769-67.231Q216.538-869 256-869h603q39.05 0 66.525 27.769Q953-813.463 953-774v433q0 39.462-27.475 67.231Q898.05-246 859-246zm0-246v151h603v-151H697q-19 44-55.5 71T557-394q-47 0-84-27t-56-71zm301 38q30 0 58.58-22T649-527q3-11 10.704-18 7.703-7 18.296-7h181v-222H256v222h180.409q11.591 0 19.147 7 7.555 7 9.444 18 6 29 34.691 51 28.691 22 57.309 22M101-92q-39.05 0-66.525-27.475Q7-146.95 7-186v-422q0-19.75 13.675-33.375Q34.351-655 54.175-655 74-655 87.5-641.375 101-627.75 101-608v422h602q19.75 0 33.375 13.675Q750-158.649 750-138.825 750-119 736.375-105.5 722.75-92 703-92zm155-249h603z" />
  </Svg>
);
