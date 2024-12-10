import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRoundaboutRight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M265-172v-185q-91-16-150.5-87T55-608q0-107 75-182.5T313-866q93 0 164 59.5T564-656h163l-57-57q-14-14-14-33t13-33q14-14 33-14t33 14l137 137q7 7 11 15.5t4 18.5q0 9-4 18t-11 15L735-438q-14 14-33 14t-33-14q-13-14-13-33t13-32l58-58H552q-29 0-51.5-17.5T474-624q-7-63-52.5-105T313-771q-68 0-115.5 47.5T150-608q0 62 41.5 107.5T296-448q28 5 46 27t18 51v198q0 20-13.5 33.5T313-125q-21 0-34.5-13.5T265-172" />
  </Svg>
);
