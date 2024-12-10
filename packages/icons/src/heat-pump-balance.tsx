import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHeatPumpBalance = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M809-666h-60.609q-18.116 0-29.253 11.138Q708-643.725 708-626v265q0 49.833-33.735 86.417Q640.529-238 590.647-238t-83.265-36.583Q474-311.167 474-361v-227q0-16.5-10.617-27.25Q452.765-626 437.07-626q-16.57 0-27.32 10.75T399-588v227q0 49.833-33.735 86.417Q331.529-238 281.647-238t-83.265-36.583Q165-311.167 165-361v-305q0-16.475 11.175-28.237Q187.351-706 203.982-706q16.632 0 28.325 11.763Q244-682.475 244-666v310q0 16.5 10.75 27.25T282.07-318q16.57 0 26.75-10.75T319-356v-227q0-49.833 33.941-86.417Q386.882-706 436.441-706t83.059 36.583Q553-632.833 553-583v227q0 16.5 10.75 27.25T591.07-318q16.57 0 26.75-10.75T628-356v-270q0-50 35-85t85-35h60l-21-22q-8-7-7-19.158 1-12.158 15.609-26Q807.933-825 824.433-825T853-813l73 73q14 14.727 14 34.364Q940-686 926-672l-74 73q-12 13-29 11t-37-22q-8-7-7.5-17t7.5-18zM105-74q-40.213 0-67.606-27.1Q10-128.2 10-168v-301q0-19.75 13.625-33.375T57-516h823q19.625 0 33.812 13.625Q928-488.75 928-469v301q0 39.8-27.394 66.9Q873.213-74 833-74zm0-94h728v-253H105zm728-253H105z" />
  </Svg>
);
