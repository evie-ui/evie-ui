import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShelfAutoHideFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm290.895-179Q499-274 512.5-287.895q13.5-13.894 13.5-32Q526-339 512.605-352.5q-13.394-13.5-32.5-13.5Q461-366 447.5-352.605q-13.5 13.394-13.5 32.5Q434-302 447.395-288q13.394 14 32.5 14m-160 0Q339-274 352.5-287.895q13.5-13.894 13.5-32Q366-339 352.605-352.5q-13.394-13.5-32.5-13.5Q301-366 287.5-352.605q-13.5 13.394-13.5 32.5Q274-302 287.395-288q13.394 14 32.5 14m320 0Q659-274 672.5-287.895q13.5-13.894 13.5-32Q686-339 672.605-352.5q-13.394-13.5-32.5-13.5Q622-366 608-352.605q-14 13.394-14 32.5Q594-302 607.895-288q13.894 14 32 14" />
  </Svg>
);