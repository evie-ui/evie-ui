import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEmergency = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M401-198v-145l-126 73q-29 16-60 8.5T167-298q-16-29-8-60.5t37-48.5l127-73-125-73q-29-16-38-47t7-60q17-28 48.5-36.5T276-688l125 72v-147q0-32 23-55t56-23q33 0 56 23t23 55v147l126-73q29-16 60-8t47 37q17 29 8.5 60T763-553l-125 73 126 73q29 17 37 48.5t-9 59.5q-16 29-47 37t-60-8l-126-73v145q0 33-23 56t-56 23q-33 0-56-23t-23-56" />
  </Svg>
);
