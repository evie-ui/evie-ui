import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgImagesmode = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0 0v-582zm80-79h423q15 0 21-12.625T711-306L597-462q-7.308-9-19.154-9.5T559-462L446-317l-73-101q-8.308-10-20.154-9.5T334-418l-83 112q-9 12.75-3 25.375T269-268m71.118-285q27.965 0 47.424-19.576Q407-592.152 407-620.118q0-27.965-19.576-47.424Q367.848-687 339.882-687q-27.965 0-47.424 19.576Q273-647.848 273-619.882q0 27.965 19.576 47.424Q312.152-553 340.118-553" />
  </Svg>
);
