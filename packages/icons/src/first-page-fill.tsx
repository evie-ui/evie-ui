import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFirstPageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M270-216q-20 0-33.5-13.5T223-263v-434q0-20 13.5-33.5T270-744q20 0 33.5 13.5T317-697v434q0 20-13.5 33.5T270-216m293-261 158 158q14 14 13.5 33T720-253q-14 14-33.5 14T653-253L463-443q-7-7-11-16t-4-18q0-9 4-18t11-16l191-191q14-14 33.5-14t33.5 14q14 14 14 33.5T721-635z" />
  </Svg>
);