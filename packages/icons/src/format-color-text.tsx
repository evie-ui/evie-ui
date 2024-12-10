import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatColorText = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M102 0Q82 0 68.5-13.5T55-47v-85q0-20 13.5-34t33.5-14h756q20 0 34 14t14 34v85q0 20-14 33.5T858 0zm162-300q-27 0-41.5-21.5T219-369l196-464q6-15 19-24t29-9h43q16 0 29 9.5t20 23.5l190 462q11 26-4.5 48.5T697-300q-17 0-31-9.5T646-335l-39-101H351l-43 106q-5 13-17 21.5t-27 8.5m115-212h201l-98-260h-4z" />
  </Svg>
);
