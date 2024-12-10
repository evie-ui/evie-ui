import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCalendarToday = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-55q-39.05 0-66.525-27.475Q95-109.95 95-149v-602q0-39.463 27.475-67.231Q149.95-846 189-846h56v-19q0-16.75 12.393-28.875t28.8-12.125q16.832 0 28.82 12.125Q327-881.75 327-865v19h306v-19q0-16.75 12.393-28.875t28.8-12.125q16.832 0 28.82 12.125Q715-881.75 715-865v19h56q39.463 0 67.231 27.769Q866-790.463 866-751v602q0 39.05-27.769 66.525Q810.463-55 771-55zm0-94h582v-421H189zm0-481h582v-121H189zm0 0v-121z" />
  </Svg>
);
