import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const Svg18UpRatingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M336-550v165q0 11 7 18t18 7q11 0 18-7t7-18v-190q0-11-7-18t-18-7h-63q-11 0-18 7t-7 18q0 11 7 18t18 7zm170 190h90q14 0 27-13t13-27v-160q0-14-13-27t-27-13h-90q-14 0-27 13t-13 27v160q0 14 13 27t27 13m10-38v-64h70v64zm0-100v-64h70v64zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
