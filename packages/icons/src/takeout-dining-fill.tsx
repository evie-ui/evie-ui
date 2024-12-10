import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTakeoutDiningFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m152-540-86-93q-13-14-13-33t14-33q14-14 33.5-14t33.5 14l58 60-1-25q-1-16 6-31.5t19-27.5l111-114q13-13 30.5-21t37.5-8h170q20 0 37.5 8t30.5 21l111 114q13 13 19.5 28.5T770-662l-2 23 59-61q14-14 33-13.5t33 14.5q13 14 13.5 33T895-633l-87 93zm496 405H312q-37 0-64-25.5T219-222l-22-278h566l-21 278q-3 36-30 61.5T648-135" />
  </Svg>
);
