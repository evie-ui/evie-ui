import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRoomPreferences = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M695.091-53.627 692-85q-18-5-37-16t-31-22l-28 12.118q-8 2.882-16 .382t-12.375-9.255l-22.25-35.49Q540-162 542-170.5t9-14.5l25-20q-6-18-5.5-37.5T576-280l-25-20q-7-6-9-14t3.375-15.868l22.25-35.264Q572-372 580-374.5t16 .382L623-362q12-10 31.5-21t37.5-16l3.091-32.235Q696-440 703-445.5t15.625-5.5h37.75Q764-451 771-445.5t8.909 14.265L783-399q17 5 36.5 16.5T850-361l27-12.118q8-2.882 17-.882t13.375 9.868l21.25 36.264Q933-320 931.5-311.5 930-303 923-297l-25 19q6 19 5.5 37.5T898-204l25 19q7 7 9 15t-3.375 15.755l-21.25 35.49Q903-112 894-110q-9 2-16.9-1L850-123q-11 11-30.5 22T783-85l-3.091 31.373Q778-45 771-39.5q-7 5.5-14.625 5.5h-37.75Q710-34 703-39.5t-7.909-14.127M736-147q41 0 69-27.5t28-68.5q0-40-28-68t-69-28q-41 0-68.5 28T640-243q0 41 27.5 68.5T736-147M429-434q-19 0-32.5-13.5T383-480q0-19 13.5-32.5T429-526q20 0 33 13.5t13 32.5q0 19-13 32.5T429-434M165-189v-577q0-43 27.625-71.5T259-866h261q25.017 0 45.009 12.5Q585-841 596-821h106q38.75 0 66.375 27.625T796-726v168q0 19.75-13.675 33.375Q768.649-511 748.825-511 729-511 715.5-524.625 702-538.25 702-558v-168h-87v243q-30 14-54 34.5T520-400v-371H259v582h220q4 28 11 49t22 45H109q-19.75 0-33.375-13.675Q62-122.351 62-142.175 62-162 75.625-175.5 89.25-189 109-189zm94 0v-582z" />
  </Svg>
);
