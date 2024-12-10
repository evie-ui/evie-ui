import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHardDrive = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M152-274h656v-250H152zm531.118-75Q704-349 718.5-363.118q14.5-14.117 14.5-36Q733-420 718.382-434.5q-14.617-14.5-35.5-14.5Q662-449 647.5-434.382q-14.5 14.617-14.5 35.5Q633-377 647.618-363q14.617 14 35.5 14M903-611H769l-79-79H270l-79 79H58l145-145q13.075-13.087 30.193-20.543Q250.311-784 270-784h420q19.2 0 36.6 7.5Q744-769 758-756zM152-179q-39.8 0-66.9-27.394Q58-233.788 58-274v-337h845v337q0 40.212-27.394 67.606Q848.213-179 808-179z" />
  </Svg>
);
