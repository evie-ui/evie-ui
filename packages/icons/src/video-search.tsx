import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVideoSearch = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M312-510v-151q0-6.913 6-10.457 6-3.543 11.732.286L451-596q5 2.5 5 9.75T451-576l-121.268 76.171Q324-496 318-499.543q-6-3.544-6-10.457m60 198q-115.162 0-195.081-80Q97-472 97-585t80-193q80-80 193.5-80t193 80Q643-698 643-584.85q0 44.85-12.5 83.35Q618-463 593-429l236 234q14 14.556 14 34.278T829-127q-14.533 15-34.489 15-19.955 0-33.511-15L526-361q-29 22.923-68.459 35.962Q418.082-312 372-312m-.647-94q74.897 0 126.272-52.25T549-585q0-74.5-51.522-126.75T371.353-764q-75.436 0-127.895 52.25Q191-659.5 191-585t52.311 126.75Q295.623-406 371.353-406" />
  </Svg>
);
