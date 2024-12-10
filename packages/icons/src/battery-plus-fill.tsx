import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBatteryPlusFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M249-102v-692q0-19.75 13.625-33.875T297-842h86v-16q0-19.75 13.625-33.875T430-906h100q19.75 0 33.375 14.125T577-858v16h87q19.75 0 33.375 14.125T711-794v318q-9-1-18.071-1.536-9.072-.535-17.143-.607Q580-476 511.5-407.5T443-239q0 54 22.5 101.5T529-55H297q-20.75 0-34.375-13.625T249-102m393-82h-78q-19.75 0-33.375-13.675Q517-211.351 517-231.175 517-251 530.625-265 544.25-279 564-279h78v-77q0-19.75 13.675-33.375Q669.351-403 689.175-403 709-403 722.5-389.375 736-375.75 736-356v77h82q19.75 0 33.875 14.175 14.125 14.176 14.125 34Q866-211 851.875-197.5 837.75-184 818-184h-82v82q0 19.75-13.675 33.375Q708.649-55 688.825-55 669-55 655.5-68.625 642-82.25 642-102z" />
  </Svg>
);
