import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgControllerGenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-250q96 0 163-67.5T710-480q0-96-67-163t-163-67q-95 0-162.5 67T250-480q0 95 67.5 162.5T480-250m-.593-71q-65.327 0-111.867-46.673-46.54-46.672-46.54-112Q321-546 367.673-592.5q46.672-46.5 112-46.5Q546-639 592.5-592.367t46.5 112.96q0 65.327-46.633 111.867Q545.734-321 479.407-321M459-459q9 9 21 9t21-9l56-56q9-9 9-21t-9-21q-9-9-21-9t-21 9l-56 56q-9 9-9 21t9 21M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
