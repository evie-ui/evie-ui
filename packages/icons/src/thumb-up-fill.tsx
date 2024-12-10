import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThumbUpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M844-617q37 0 66 29t29 65v37q0 13-3.5 29.5T927-429L807-148q-12 30-42 50.5T702-77H325q-39 0-66.5-27T231-171v-408q0-18 6.5-35t20.5-31l159-170q21-22 50-28.5t55 6.5q25 12 37 39.5t5 58.5l-25 122zM108-77q-26 0-44-18t-18-44v-416q0-25 17-43.5t43-18.5h3q25 0 43.5 18.5T171-555v416q0 26-18.5 44T109-77z" />
  </Svg>
);
