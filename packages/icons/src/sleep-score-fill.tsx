import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSleepScoreFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M862-624q-20 0-34.5-13T808-670q-4-20-12.5-38.5T774-743l-21 34q-10 18-20.5 37T707-640q-15 15-35 15.5T637-640q-15-15-14.5-34.5T638-709q14-14 32-25.5t35-21.5l35-20q-17-15-37.5-24.5T660-813q-17-4-27.5-18T622-864q0-21 17.5-33.5T679-905q83 16 143 73.5T901-693q7 26-4.5 47.5T862-624M483-65q-87 0-163-33t-133-90q-57-57-90-133T64-484q0-136 81-247.5T359-887q12-4 22.5-1.5T400-880q7 6 10.5 15.5T414-841q-1 92 29 171.5T531-533q56 57 133.5 87T838-415q12 0 23 5t18 13q6 9 7 19t-2 21q-43 131-153 211.5T483-65" />
  </Svg>
);
