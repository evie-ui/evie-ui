import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardDoubleArrowDownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-296 165-166q14-14 33-13.5t33 13.5q14 14 14 33t-14 33L514-198q-7 7-16 11t-18 4q-9 0-18-4t-16-11L249-396q-14-14-14-33t14-33q14-14 33-14t33 14zm0-276 165-166q14-14 33-13.5t33 14.5q14 14 14 33t-14 33L514-474q-7 7-16 11t-18 4q-9 0-18-4t-16-11L249-671q-14-14-14-33t14-33q14-15 33-15t34 15z" />
  </Svg>
);
