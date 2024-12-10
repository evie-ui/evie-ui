import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSportsHandballFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m358-301-54 87q-9 14-25 18t-31-4q-15-8-18.5-24.5T235-256l201-325q-41-37-61-79t-20-88q0-34 5-63t19-61q6-16 22-21.5t32 2.5q15 9 19.5 25t-.5 33q-7 20-10 38.5t-3 37.5q0 44 20 78t73 65l107 63q58 35 83 81t25 112q0 34-9 68t-23 68q-7 16-23.5 21.5T660-203q-16-9-20.5-25.5T641-262q10-22 16.5-45t6.5-48q0-31-10.5-56T622-448L383-39q-9 15-25 19t-31-4q-15-8-18.5-24.5T313-80l107-183zm287-321q-35 0-60-25t-25-60q0-35 25-59.5t60-24.5q35 0 59.5 24.5T729-707q0 35-24.5 60T645-622m-85-189q-29 0-47.5-19T494-877q0-29 18.5-47.5T560-943q28 0 47 18.5t19 47.5q0 28-19 47t-47 19" />
  </Svg>
);
