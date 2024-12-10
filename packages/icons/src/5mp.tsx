import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const Svg5Mp = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M493-551h-95q-10.833 0-17.917 7.116-7.083 7.117-7.083 18Q373-515 380.083-508q7.084 7 17.917 7h105q14 0 27-13t13-27v-56q0-14-13-27t-27-13h-80v-54h95q10.833 0 17.917-7.116 7.083-7.117 7.083-18Q543-727 535.917-734q-7.084-7-17.917-7H398q-10.833 0-17.917 7.083Q373-726.833 373-716v87q0 10.833 7.083 17.917Q387.167-604 398-604h95zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582zm94 371h53v98q0 10.833 7.116 17.917 7.117 7.083 18 7.083Q372-277 379-284.083q7-7.084 7-17.917v-98h60v156q0 10.833 7.116 17.917 7.117 7.083 18 7.083Q482-219 489-226.083q7-7.084 7-17.917v-165.727Q496-424 483-437t-27-13H273q-14 0-27 13t-13 27.255v165.55q0 11.028 7.116 18.112 7.117 7.083 18 7.083Q269-219 276-226.083q7-7.084 7-18.156zm323 122h80q14 0 27-12.5t13-27.5v-91.813q0-14.138-13-27.163Q700-450 686-450H581q-10.833 0-17.917 7.083Q556-435.833 556-424.798V-244q0 10.833 7.116 17.917 7.117 7.083 18 7.083Q592-219 599-226.083q7-7.084 7-17.917zm0-50v-72h70v72z" />
  </Svg>
);
