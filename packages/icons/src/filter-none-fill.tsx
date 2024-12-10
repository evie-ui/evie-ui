import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFilterNoneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M286-192q-39.05 0-66.525-27.475Q192-246.95 192-286v-542q0-39.463 27.475-67.231Q246.95-923 286-923h542q39.463 0 67.231 27.769Q923-867.463 923-828v542q0 39.05-27.769 66.525Q867.463-192 828-192zM132-37q-39.463 0-67.231-27.769Q37-92.537 37-132v-589q0-20 13.5-33.5t34-13.5q20.5 0 34 13.5T132-721v589h589q20 0 33.5 13.5t13.5 34q0 20.5-13.5 34T721-37z" />
  </Svg>
);
