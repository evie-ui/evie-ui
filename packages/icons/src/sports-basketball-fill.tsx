import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsBasketballFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M58-527q4-43 23-95t45-93q61 52 85.5 97.5T244-527zm658 0q8-45 33-92t84-97q27 41 46 93.5t23 95.5zM127-244q-27-40-46.5-93T58-433h186q-8 45-32 92t-85 97m706-1q-59-50-84-96.5T716-433h186q-4 43-23 95t-46 93M343-527q-11-66-43-128.5T189-790q42-39 102-71t142-41v375zm184 0v-375q82 9 142.5 41T772-790q-78 72-111 134.5T617-527zM433-58q-86-10-143.5-41.5T190-170q78-72 110-135t43-128h90zm94 0v-375h90q11 65 44 127.5T772-171q-42 39-100 71T527-58" />
  </Svg>
);
