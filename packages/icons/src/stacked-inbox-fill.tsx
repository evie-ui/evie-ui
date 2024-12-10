import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStackedInboxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M256-246q-38.462 0-66.731-28Q161-302 161-341v-433q0-39.463 28.269-67.231Q217.538-869 256-869h603q39.05 0 66.525 27.769Q953-813.463 953-774v433q0 39-27.475 67T859-246zm301-208q30 0 58.58-22T649-527q3-11 10.704-18 7.703-7 18.296-7h181v-222H256v222h180.409q11.591 0 19.147 7 7.555 7 9.444 18 6 28 35 50.5t57 22.5M101-92q-38.05 0-66.025-27.975Q7-147.95 7-186v-422q0-19.75 13.675-33.375Q34.351-655 54.175-655 74-655 87.5-641.375 101-627.75 101-608v422h602q19.75 0 33.375 13.675Q750-158.649 750-138.825 750-119 736.375-105.5 722.75-92 703-92z" />
  </Svg>
);
