import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLeaderboardFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M102-95q-19.75 0-33.375-13.625T55-142v-436q0-19.75 13.625-33.875T102-626h138q19.75 0 33.375 14.125T287-578v436q0 19.75-13.625 33.375T240-95zm309 0q-19.75 0-33.375-13.625T364-142v-676q0-19.75 13.625-33.875T411-866h138q19.75 0 33.375 14.125T596-818v676q0 19.75-13.625 33.375T549-95zm309 0q-19.75 0-33.375-13.625T673-142v-356q0-19.75 13.625-33.875T720-546h138q19.75 0 33.875 14.125T906-498v356q0 19.75-14.125 33.375T858-95z" />
  </Svg>
);
