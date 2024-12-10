import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCodeOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m180-483 164 164q14 15 13.5 33.5T343-252q-15 15-34 14.5T276-252L78-448q-7-7-11-16t-4-18q0-9 4-18t11-16l139-138L54-817q-10-10-10.5-24.5T54-867q11-11 25.5-11t25.5 11l762 762q10 10 10 25t-10 25q-11 11-25 11t-25-11L284-587zm573 163-67-67 95-94-164-164q-15-15-14-33.5t15-33.5q15-15 34-14.5t33 14.5l197 196q7 7 11 16t4 18q0 9-4 18t-11 16z" />
  </Svg>
);
