import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWest = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M234-433h624q20 0 33.5-13.5T905-480q0-20-13.5-33.5T858-527H234l161-159q14-14 14-33.5T395-753q-15-14-34-13.5T328-752L89-513q-7 7-10.5 15.5T75-479q0 9 3.5 17.5T89-446l239 239q14 14 33 14.5t34-14.5q14-14 14-33t-14-33z" />
  </Svg>
);
