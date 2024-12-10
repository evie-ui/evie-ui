import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCheckBox = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m417-430-79-79q-14-13-32-12.5T274.5-507Q261-493 261-475.5t13 30.5l109 109q14.455 14 33.727 14Q436-322 451-336l235-237q14-13 13.5-31.111T686-636q-13.778-13-31.389-13Q637-649 623-636zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
