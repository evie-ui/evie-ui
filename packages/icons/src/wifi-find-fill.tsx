import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWifiFindFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M409-145 52-539q-10-12-15-27.5T33-598q1-15 7-29.5T58-653q92-74 195-117t227-43q123 0 225.5 42T900-655q12 11 19 26t8 31q2 16-3 31.5T907-539l-40 40q-27-48-77-79.5T680-610q-88 0-149 61t-61 149q0 70 38.5 121.5T607-204l-56 58q-15 17-33.5 25t-37.5 8q-19 0-38-7.5T409-145m434-43-85-85q-17 11-37.5 17t-40.5 6q-62 0-106-44t-44-106q0-62 44-106t106-44q62 0 106 44t44 106q0 23-6 43t-17 32l86 86q11 11 10.5 25.5T892-188q-11 11-24.5 11T843-188M680-321q32 0 55.5-23.5T759-400q0-32-23.5-55.5T680-479q-32 0-55.5 23.5T601-400q0 32 23.5 55.5T680-321" />
  </Svg>
);