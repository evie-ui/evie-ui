import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTabCloseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M286-192q-39 0-66.5-27.5T192-286v-542q0-39 27.5-67t66.5-28h542q39 0 67 28t28 67v542q0 39-28 66.5T828-192zM132-37q-39 0-67-28t-28-67v-589q0-20 13.5-33.5T85-768q20 0 33.5 13.5T132-721v589h589q20 0 33.5 13.5T768-85q0 21-13.5 34.5T721-37zm375-403 50-51 51 51q15 15 33.5 14.5T675-440q15-15 15-33.5T675-507l-51-50 51-51q15-15 15-33.5T675-675q-15-15-33.5-15T608-675l-51 51-51-51q-14-15-32.5-15T440-675q-14 15-14 33.5t14 33.5l51 51-51 51q-15 14-14.5 32.5T440-440q15 14 33.5 14t33.5-14" />
  </Svg>
);
