import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlag = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M269-404v262q0 19.75-13.675 33.375Q241.649-95 221.825-95 202-95 188.5-108.625 175-122.25 175-142v-636q0-19.75 13.625-33.875T222-826h304q16.5 0 29.75 11.5T572-787l11 47h195q19.75 0 33.875 14.125T826-692v326q0 19.75-14.125 33.375T778-319H561q-16.5 0-29.75-10.5T515-356l-11-48zm334-9h128v-232H541q-16.5 0-29.75-11T495-683l-11-48H269v233h277q16.5 0 29.75 10.5T592-461zM500-572" />
  </Svg>
);