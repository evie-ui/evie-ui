import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFilter2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M512-427v-94h110q32 0 52-20t20-52v-96q0-32-20-51.5T622-760H478q-14.9 0-24.95 10.07-10.05 10.07-10.05 25t10.55 25.43Q464.1-689 479-689h143v96H512q-32.75 0-51.875 20T441-521v118q0 20.75 13.625 34.375T488-355h157q14.9 0 24.95-10.57Q680-376.14 680-391.07t-10.05-25.43Q659.9-427 645-427zM286-192q-39.05 0-66.525-27.475Q192-246.95 192-286v-542q0-39.463 27.475-67.231Q246.95-923 286-923h542q39.463 0 67.231 27.769Q923-867.463 923-828v542q0 39.05-27.769 66.525Q867.463-192 828-192zM132-37q-39.463 0-67.231-27.769Q37-92.537 37-132v-589q0-19.75 13.675-33.375Q64.351-768 84.675-768 105-768 118.5-754.375 132-740.75 132-721v589h589q19.75 0 33.375 13.675Q768-104.649 768-84.325 768-64 754.375-50.5 740.75-37 721-37z" />
  </Svg>
);