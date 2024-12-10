import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgChurch = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M63-129v-187q0-28.476 15-51.738T119-403l109-48v-71q0-28.493 14-51.063 14-22.571 38-34.937l153-78v-83h-33q-19.75 0-33.375-13.675Q353-796.351 353-816.175 353-836 366.625-849.5 380.25-863 400-863h33v-33q0-19.75 13.675-33.375Q460.351-943 480.175-943 500-943 513.5-929.375 527-915.75 527-896v33h33q19.75 0 33.375 13.675Q607-835.649 607-815.825 607-796 593.375-782.5 579.75-769 560-769h-33v83l153 78q24 12.366 38 34.937 14 22.57 14 51.063v71l109 48q26 12 41 35.262T897-316v187q0 40.213-27.625 67.606Q841.75-34 803-34H571q-19.75 0-33.375-13.625T524-82v-124q0-18.1-12.93-31.05t-31-12.95Q462-250 449-237.05T436-206v124q0 20.75-13.625 34.375T389-34H157q-38.75 0-66.375-27.394Q63-88.787 63-129m94 0h185v-79q0-55.82 40.735-97.41 40.736-41.59 97.5-41.59Q537-347 578-305.41T619-208v79h184v-191l-165-73v-134l-158-81-158 81v134l-165 73zm323.059-273Q503-402 519-418.059q16-16.059 16-39Q535-479 518.941-495.5q-16.059-16.5-39-16.5T441-495.441q-16 16.559-16 38.5Q425-434 441.059-418q16.059 16 39 16M480-369" />
  </Svg>
);
