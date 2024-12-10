import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const Svg50MpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M553-501h90q14 0 27-13t13-27v-160q0-14-13-27t-27-13h-90q-14 0-27 13t-13 27v160q0 14 13 27t27 13m3-50v-140h77v140zM283-400h53v98q0 11 7 18t18 7q11 0 18-7t7-18v-98h60v156q0 11 7 18t18 7q11 0 18-7t7-18v-165.727Q496-424 483-437t-27-13H273q-14 0-27 13t-13 27.255v165.55Q233-233 240-226t18 7q11 0 18-7t7-18.239zm323 122h80q14 0 27-12.5t13-27.5v-91.714q0-14.122-13-27.204T686-450h-83q-20 0-33.5 13.5T556-403v159q0 11 7 18t18 7q11 0 18-7t7-18zm0-50v-72h70v72zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm197-509v53h-95q-11 0-18 7t-7 18q0 11 7 18t18 7h105q14 0 27-13t13-27v-56q0-14-13-27t-27-13h-80v-54h95q11 0 18-7t7-18q0-11-7-18t-18-7h-98q-20 0-33.5 13.5T266-694v43q0 20 13.5 33.5T313-604z" />
  </Svg>
);