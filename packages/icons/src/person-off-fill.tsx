import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPersonOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m817-55-68-67H229q-40.05 0-67.025-27.5Q135-177 135-216v-27q0-44 22.633-77.417Q180.266-353.833 217-371q59.242-26 113.992-41 54.75-15 111.008-18L54-817q-10-10-10-24.5T55-867q10.579-11 25.5-11t25.5 11l761 762q10 10 10 25t-10 25q-10.579 11-25 11t-25-11m-75-316q35 15 57 44.5t25 70.5v8L674-398q17 5 34 12.5t34 14.5M561-511 322-751q20.763-44.639 64.382-68.819Q430-844 479.935-844 553-844 604.5-793.5T656-669.475q0 50.221-24.5 93.348T561-511" />
  </Svg>
);