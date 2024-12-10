import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgResume = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M193-240v-480q0-20 13.5-33.5T240-767q20 0 33.5 13.5T287-720v480q0 20-13.5 33.5T240-193q-20 0-33.5-13.5T193-240m279 4 339-203q11-7 17-18t6-23q0-12-6-23t-17-18L472-724q-5-3-11.5-5.5T449-732q-19 0-33.5 13T401-685v410q0 21 14.5 34t33.5 13q5 0 11.5-2.5T472-236m24-143v-202l164 101zm0-101" />
  </Svg>
);
