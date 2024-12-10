import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgKeyboardArrowUpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-530 316-366q-14 14-33 13.5T250-367q-14-14-14-33.5t14-33.5l196-196q14-14 34-14t34 14l197 197q14 14 14 33t-14 33q-14 14-33.5 14T644-367z" />
  </Svg>
);
