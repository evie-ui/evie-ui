import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDialogs = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M302-251h356q19.75 0 33.375-13.625T705-298v-364q0-19.625-13.625-33.812Q677.75-710 658-710H302q-19.75 0-33.375 14.188Q255-681.625 255-662v364q0 19.75 13.625 33.375T302-251M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
