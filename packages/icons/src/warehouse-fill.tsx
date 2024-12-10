import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWarehouseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M57-191v-441q0-29.154 15.83-52.914Q88.66-708.673 117-720l328-131q17-6 35-6t35 6l329 131q27.34 11.327 43.17 35.086Q903-661.154 903-632v441q0 39-27.5 66.5T809-97H629v-297H331v297H151q-39 0-66.5-27.5T57-191m324 94v-60h60v60zm69-120v-60h60v60zm69 120v-60h60v60z" />
  </Svg>
);
