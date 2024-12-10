import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLibraryMusic = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M503-352q41 0 70-27.695t29-68.126V-696h86q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T688-756h-96q-12.75 0-21.375 8.73Q562-738.541 562-725.636V-525q-10-9-25.638-14-15.639-5-33.362-5-39.06 0-66.03 27.366t-26.97 67Q410-410 436.97-381T503-352M286-192q-39.05 0-66.525-27.475Q192-246.95 192-286v-542q0-39.463 27.475-67.231Q246.95-923 286-923h542q39.463 0 67.231 27.769Q923-867.463 923-828v542q0 39.05-27.769 66.525Q867.463-192 828-192zm0-94h542v-542H286zM132-37q-39.463 0-67.231-27.769Q37-92.537 37-132v-589q0-19.75 13.675-33.375Q64.351-768 84.675-768 105-768 118.5-754.375 132-740.75 132-721v589h589q19.75 0 33.375 13.675Q768-104.649 768-84.325 768-64 754.375-50.5 740.75-37 721-37zm154-791v542z" />
  </Svg>
);
