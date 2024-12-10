import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRightPanelOpenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M435-378v-204q0-15.917-15-21.958Q405-610 394-599l-85 85q-14 14.364-14 34.182T309-446l85 85q11 11 26 4.958 15-6.041 15-21.958M189-95q-39.8 0-66.9-27.1Q95-149.2 95-189v-582q0-40.213 27.1-67.606Q149.2-866 189-866h582q40.213 0 67.606 27.394Q866-811.213 866-771v582q0 39.8-27.394 66.9Q811.213-95 771-95zm356-94v-582H189v582z" />
  </Svg>
);
