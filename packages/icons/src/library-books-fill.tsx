import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLibraryBooksFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M381.825-424H551q13.9 0 23.95-10.1Q585-444.201 585-458.175q0-14.4-10.05-24.613Q564.9-493 551-493H381.825q-14.575 0-24.2 10.272t-9.625 24.5Q348-444 357.625-434q9.625 10 24.2 10m-.156-99H734q13.9 0 23.95-10.1Q768-543.201 768-557.175q0-14.4-10.05-24.612Q747.9-592 734-592H381.669q-14.419 0-24.044 10.272t-9.625 24.5Q348-543 357.625-533q9.625 10 24.044 10m0-99H734q13.9 0 23.95-10.1Q768-642.201 768-656.175q0-14.4-10.05-24.612Q747.9-691 734-691H381.669q-14.419 0-24.044 10.272t-9.625 24.5Q348-642 357.625-632q9.625 10 24.044 10M286-192q-39.05 0-66.525-27.475Q192-246.95 192-286v-542q0-39.463 27.475-67.231Q246.95-923 286-923h542q39.463 0 67.231 27.769Q923-867.463 923-828v542q0 39.05-27.769 66.525Q867.463-192 828-192zM132-37q-39.463 0-67.231-27.769Q37-92.537 37-132v-589q0-19.75 13.675-33.375Q64.351-768 84.675-768 105-768 118.5-754.375 132-740.75 132-721v589h589q19.75 0 33.375 13.675Q768-104.649 768-84.325 768-64 754.375-50.5 740.75-37 721-37z" />
  </Svg>
);
