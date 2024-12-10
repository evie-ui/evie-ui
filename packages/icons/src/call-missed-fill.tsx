import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCallMissedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-534v140q0 20.75-13.675 34.375Q161.649-346 141.825-346 122-346 108.5-359.625 95-373.25 95-394v-258q0-19.75 13.625-33.375T142-699h251q19.75 0 33.375 13.675Q440-671.649 440-651.825 440-631 426.375-617.5 412.75-604 393-604H253l228 229 286-286q14-14 33-13.5t33.391 14.5Q847-646 847-627t-14 33L547-308q-14 14-31 20.5t-35 6.5q-18 0-35-6.5T415-308z" />
  </Svg>
);
