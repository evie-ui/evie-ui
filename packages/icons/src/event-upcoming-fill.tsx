import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEventUpcomingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M771-55H637q-19.75 0-33.375-13.675Q590-82.351 590-102.175 590-122 603.625-135.5 617.25-149 637-149h134v-421H189v155q0 20.75-13.675 34.375Q161.649-367 141.825-367 122-367 108.5-380.625 95-394.25 95-415v-336q0-39.463 27.475-67.231Q149.95-846 189-846h56v-19q0-16.75 12.393-28.875t28.8-12.125q16.832 0 28.82 12.125Q327-881.75 327-865v19h306v-19q0-16.75 12.393-28.875t28.8-12.125q16.832 0 28.82 12.125Q715-881.75 715-865v19h56q39.463 0 67.231 27.769Q866-790.463 866-751v602q0 39.05-27.769 66.525Q810.463-55 771-55m-421-98H80q-19.75 0-33.375-13.675Q33-180.351 33-200.175 33-220 46.625-233.5 60.25-247 80-247h270l-64-64q-13-14-13-32.9t14-33.1q14-14 33-14t33 14l144 143q14 14.364 14 34.182T497-166L353-23Q339-9 320.2-9 301.4-9 287-23q-14-14-14.5-33T286-89z" />
  </Svg>
);
