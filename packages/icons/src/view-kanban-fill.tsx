import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewKanbanFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm124.325-584Q301-679 292.5-669.875T284-649v336.667q0 12.891 8.675 21.612 8.676 8.721 21.5 8.721Q326-282 335-290.721t9-21.612V-649q0-11.75-9.175-20.875-9.176-9.125-21.5-9.125m333 0Q634-679 625.5-669.875T617-649v256.571q0 12.933 8.675 21.681 8.676 8.748 21.5 8.748Q659-362 668-370.748t9-21.681V-649q0-11.75-9.175-20.875-9.176-9.125-21.5-9.125m-166.5 0Q467-679 458.5-669.875T450-649v137q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T510-512v-137q0-11.75-8.675-20.875-8.676-9.125-21.5-9.125" />
  </Svg>
);
