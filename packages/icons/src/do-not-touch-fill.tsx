import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDoNotTouchFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M402-15q-29 0-56.5-14T303-68L64-443q-6-10-3-22.5T74-485q21-15 47-19t58.073 18.188L270-416v-184L47-823q-10-10.067-10.5-25.033Q36-863 47.053-874q11.052-11 25.5-11Q87-885 98-874l773 773q10 11 9.5 25.5T867.947-50q-10.052 11-24 11Q830-39 820-50l-7-7q-21 19-48.56 30.5Q736.88-15 706-15zm464-192L566-506h49v-360q0-16.75 11.675-28.375Q638.351-906 655.175-906 671-906 682.5-894.375T694-866v390h92v-310q0-16.75 11.675-28.375Q809.351-826 826.175-826 843-826 854.5-814.375T866-786zM522-550l-79-79v-281q0-16.75 11.175-28.375 11.176-11.625 28-11.625Q499-950 510.5-938.375T522-910zM350-722l-77-76v-41q5-10.75 14.675-17.875 9.676-7.125 22.5-7.125Q327-864 338.5-852.375T350-824z" />
  </Svg>
);
