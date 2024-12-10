import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUsbOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-57q-36 0-59.5-24T397-141q0-23 10.5-42t31.5-32v-94H302q-34 0-58.5-24.5T219-392v-102q-21-12-31.5-31T177-568q0-27 13-47.5t34-30.5L54-817q-10-10-10-24t11-25q10-10 25-10t25 10l762 762q10 10 10 24.5T867-55q-11 11-26 11t-25-11L562-309h-41v92q21 14 31.5 34.5T563-141q0 36-23.5 60T480-57m244-293-89-88v-81h-15q-2 0-3-1t-1-2v-105q0-10 7-17t17-7h119q9 0 16.5 7t7.5 17v118q0 10-7.5 17t-16.5 7h-18v93q0 12-5 23t-12 19m-422-42h137v-40L338-532q-5 12-14 21.5T302-495zm219-159-82-83v-98h-39q-11-8-17-15t-12-17l90-122q7-9 19-9t20 9l84 115q9 12 3 25.5T565-732h-44z" />
  </Svg>
);
