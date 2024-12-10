import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrush = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M208.973-93q-37.808 0-78.89-18Q89-129 54-174q43-12 58.5-32.5T131-268q3-46.75 36.941-79.875t86-33.125Q306-381 342-344.833q36 36.166 36 87.833 0 72-49 118T208.973-93m.027-78q35 0 62.5-25t27.5-61q0-20-12.5-32.5T254-302q-20 0-32.5 12.5T209-257q0 39-8.5 57.5T169-177q6 1 20 3.5t20 2.5m251-175L347-464l410-411q14-13 31-14t32 14l53 53q15 15 14 32.5T873-758zm-206 89" />
  </Svg>
);
