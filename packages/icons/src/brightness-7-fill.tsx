import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrightness7Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M342.163-135H229q-39.75 0-66.875-27.125T135-229v-112.587L63-414q-14-14-20.5-30.814-6.5-16.813-6.5-35Q36-498 42.5-515T63-546l72-72.413V-731q0-39.75 27.125-67.375T229-826h112.587L414-897q14-14 31.5-20.5t35.697-6.5q18.197 0 35.021 7.196Q533.042-909.609 547-896l71 70h113q39.75 0 67.375 27.625T826-731v112.587L897-546q14 14 20.5 30.814 6.5 16.813 6.5 35Q924-462 917.5-445T897-414l-71 72.413V-229q0 39.75-27.625 66.875T731-135H618l-71 70q-13.958 14.13-30.782 20.565Q499.394-38 481.197-38t-35.16-6.435Q429.073-50.87 415-65zm138.89-160Q559-295 613-349.053t54-132Q667-559 612.947-613t-132-54Q403-667 349-612.947t-54 132Q295-403 349.053-349t132 54M481-357q-52 0-88-36t-36-88q0-52 36-88t88-36q52 0 88 36t36 88q0 52-36 88t-88 36" />
  </Svg>
);
