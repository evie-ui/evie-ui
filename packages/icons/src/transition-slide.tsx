import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTransitionSlide = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M109-135q-39.05 0-66.525-27.475Q15-189.95 15-229v-502q0-39.463 27.475-67.231Q69.95-826 109-826h105q39.462 0 67.231 27.769Q309-770.463 309-731v502q0 39.05-27.769 66.525Q253.462-135 214-135zm0-93h105v-503H109zm374 93q-39.05 0-66.525-27.475Q389-189.95 389-229v-502q0-39.463 27.475-67.231Q443.95-826 483-826h369q39.05 0 66.525 27.769Q946-770.463 946-731v502q0 39.05-27.475 66.525Q891.05-135 852-135zm0-93h369v-503H483zm-269 0v-503zm269 0v-503z" />
  </Svg>
);