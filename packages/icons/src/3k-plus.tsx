import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const Svg3KPlus = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M680-463v42.5q0 8.5 5.5 14.5t14 6q8.5 0 14.5-6t6-14.5V-463h35q7 0 11.5-5.143t4.5-12q0-6.857-4.5-11.357Q762-496 755-496h-35v-44q0-8-6-14t-14-6q-9 0-14.5 6t-5.5 14v44h-47q-7 0-11.5 4.5t-4.5 11.357q0 6.857 5.1 12T634-463zm-148 13 77.968 82q2.032 2 15.955 8Q641-360 647.5-374q6.5-14-3.5-26.261l-74-79.36L644-561q10-10.696 4-24.848T625.513-600q-4.978 0-8.871 2-3.892 2-6.642 6l-77.504 82v-65q0-10.833-7.687-17.917Q517.123-600 506.632-600t-17.562 7.083Q482-585.833 482-575v190q0 10.833 7.116 17.917 7.117 7.083 17.5 7.083 10.384 0 17.884-7.083Q532-374.167 532-385zm-170 40h-95q-10.833 0-17.917 7.116-7.083 7.117-7.083 18Q242-374 249.083-367q7.084 7 17.917 7h112q14.025 0 23.513-9.487Q412-378.975 412-393v-173q0-14.45-9.487-24.225Q393.025-600 379-600H267q-10.833 0-17.917 7.116-7.083 7.117-7.083 18Q242-564 249.083-557q7.084 7 17.917 7h95v54h-64q-7 0-11.5 4.5t-4.5 11.357q0 6.857 5.1 12T299-463h63zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
