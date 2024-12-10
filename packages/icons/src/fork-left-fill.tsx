import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgForkLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m515-686-57 57q-14 14-33 14.5T392-628q-15-14-15-33t15-34l136-137q14-14 33.5-14t33.5 14l137 137q14 15 14 33.5T732-629q-14 15-33 15t-33-14l-57-58v544q0 20-13.5 33.5T562-95q-20 0-33.5-13.5T515-142v-112q-18-56-60.5-86T361-370q-22 0-43 3.5t-35 6.5l58 58q14 14 14 33t-13 33q-15 14-33.5 14T276-236L138-373q-14-14-14-33.5t14-33.5l138-137q14-14 32.5-14t33.5 14q14 15 14 33.5T342-511l-57 57q17-4 38-7.5t35-3.5q56 0 91.5 18t65.5 42z" />
  </Svg>
);
