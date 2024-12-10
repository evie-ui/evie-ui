import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRemoveModeratorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M769-287 238-817l209-79q16-5 33-5.5t33 5.5l251 93q28 10 45 35t17 55v189q0 65-15.5 124.5T769-287m-90 117q-35 35-79 63t-91 43q-7 2-14 3.5T480-59q-11 0-29-7-146-51-231-177.5T135-524v-192l-75-75q-11-11-10.5-25.5T61-842q11-10 25.5-10t25.5 10l728 728q10 11 9.5 25.5T839-63q-11 11-25.5 11.5T788-62z" />
  </Svg>
);
