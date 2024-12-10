import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShelfAutoHide = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582zm290.895 497q19.505 0 32.805-13.895 13.3-13.894 13.3-32.5Q526-339 512.805-352.5q-13.194-13.5-32.7-13.5-19.505 0-32.805 13.195-13.3 13.194-13.3 32.7Q434-302 447.195-288q13.194 14 32.7 14m-160 0q19.505 0 32.805-13.895 13.3-13.894 13.3-32.5Q366-339 352.805-352.5q-13.194-13.5-32.7-13.5-19.505 0-32.805 13.195-13.3 13.194-13.3 32.7Q274-302 287.195-288q13.194 14 32.7 14m320.5 0Q659-274 672.5-287.895q13.5-13.894 13.5-32.5Q686-339 672.805-352.5q-13.194-13.5-32.7-13.5Q622-366 608-352.805q-14 13.194-14 32.7Q594-302 607.895-288q13.894 14 32.5 14" />
  </Svg>
);
