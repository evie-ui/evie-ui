import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVibration = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M30.175-595Q43-595 51.5-586.375T60-565v170q0 12.75-8.675 21.375Q42.649-365 29.825-365 17-365 8.5-373.625T0-395v-170q0-12.75 8.675-21.375Q17.351-595 30.175-595m120-88q12.825 0 21.325 8.625T180-653v346q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T120-307v-346q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625m780 88q12.825 0 21.325 8.625T960-565v170q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T900-395v-170q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625m-120-88q12.825 0 21.325 8.625T840-653v346q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T780-307v-346q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625M335-120q-40.212 0-67.606-27.394Q240-174.788 240-215v-531q0-38.75 27.394-66.375T335-840h291q38.75 0 66.375 27.625T720-746v531q0 40.212-27.625 67.606Q664.75-120 626-120zm0-95h291v-531H335zm0 0v-531z" />
  </Svg>
);
