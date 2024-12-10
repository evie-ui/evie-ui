import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPause = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M619-154q-39.188 0-67.094-27.906Q524-209.812 524-249v-462q0-39.188 27.906-67.094Q579.812-806 619-806h92q39.188 0 67.094 27.906Q806-750.188 806-711v462q0 39.188-27.906 67.094Q750.188-154 711-154zm-370 0q-39.188 0-67.094-27.906Q154-209.812 154-249v-462q0-39.188 27.906-67.094Q209.812-806 249-806h92q39.188 0 67.094 27.906Q436-750.188 436-711v462q0 39.188-27.906 67.094Q380.188-154 341-154zm370-95h92v-462h-92zm-370 0h92v-462h-92zm0-462v462zm370 0v462z" />
  </Svg>
);
