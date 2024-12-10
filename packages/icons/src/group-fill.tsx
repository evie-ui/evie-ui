import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGroupFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M15-243q0-42 21.5-76T97-371q75-32 136.5-47T360-433q67 0 127.5 14.5T623-371q39 17 61 51t22 77v27q0 39-27.5 66.5T611-122H109q-39 0-66.5-27.5T15-216zm721 121q13-22 21.5-45t8.5-49v-21q0-68-29-116t-98-82q64 9 126.5 25T866-375q36 19 57.5 55t21.5 82v22q0 39-27.5 66.5T851-122zM360-494q-72 0-117-45t-45-118q0-72 45-117t117-45q72 0 117.5 45T523-657q0 73-45.5 118T360-494m397-163q0 72-45.5 117.5T594-494q-12 0-24.5-2t-26.5-7q26-27 38.5-66t12.5-88q0-48-12.5-85.5T543-810q12-4 25-6.5t26-2.5q72 0 117.5 45.5T757-657" />
  </Svg>
);