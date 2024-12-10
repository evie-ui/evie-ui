import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPauseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M637.655-154q-39.06 0-66.857-27.906Q543-209.812 543-249v-462q0-39.188 27.815-67.094Q598.631-806 637.69-806h55q39.06 0 66.685 27.906T787-711v462q0 39.188-27.643 67.094Q731.715-154 692.655-154zm-370 0q-39.06 0-66.857-27.906Q173-209.812 173-249v-462q0-39.188 27.815-67.094Q228.631-806 267.69-806h55q39.06 0 66.685 27.906T417-711v462q0 39.188-27.643 67.094Q361.715-154 322.655-154z" />
  </Svg>
);
