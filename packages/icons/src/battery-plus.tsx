import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBatteryPlus = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M297-55q-20.75 0-34.375-13.625T249-102v-692q0-19.625 13.625-33.812Q276.25-842 297-842h86v-16q0-19.625 13.625-33.812Q410.25-906 430-906h100q19.75 0 33.375 14.188Q577-877.625 577-858v16h87q19.75 0 33.375 14.188Q711-813.625 711-794v318q-24-4-48-2.5t-47 8.5v-277H344v598h119q11 28 27 51.5T529-55zm345-129h-78q-19.75 0-33.375-13.675Q517-211.351 517-231.088q0-19.737 13.625-33.824Q544.25-279 564-279h78v-77q0-19.75 13.675-33.375Q669.351-403 689.175-403 709-403 722.5-389.375 736-375.75 736-356v77h82q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q866-211 851.812-197.5 837.625-184 818-184h-82v82q0 19.75-13.675 33.375Q708.649-55 688.825-55 669-55 655.5-68.625 642-82.25 642-102z" />
  </Svg>
);
