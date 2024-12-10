import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgContentCopyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M326-192q-39.05 0-66.525-27.475Q232-246.95 232-286v-542q0-39.463 27.475-67.231Q286.95-923 326-923h422q39.463 0 67.231 27.769Q843-867.463 843-828v542q0 39.05-27.769 66.525Q787.463-192 748-192zM172-37q-39.462 0-67.231-27.769Q77-92.537 77-132v-589q0-20 13.5-33.5t34-13.5q20.5 0 34 13.5T172-721v589h469q20 0 33.5 13.5t13.5 34q0 20.5-13.5 34T641-37z" />
  </Svg>
);
