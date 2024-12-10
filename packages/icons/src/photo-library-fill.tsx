import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhotoLibraryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M362-394h391L626-565 523-430l-68-87zm-76 202q-39.05 0-66.525-27.475Q192-246.95 192-286v-542q0-39.463 27.475-67.231Q246.95-923 286-923h542q39.463 0 67.231 27.769Q923-867.463 923-828v542q0 39.05-27.769 66.525Q867.463-192 828-192zm0-94h542v-542H286zM132-37q-39.463 0-67.231-27.769Q37-92.537 37-132v-636h95v636h636v95zm154-791h500v542H286z" />
  </Svg>
);
