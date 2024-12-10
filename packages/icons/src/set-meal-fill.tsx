import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSetMealFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M117-360q-39 0-66.5-27.5T23-455v-365q0-40 27.5-67.5T117-915h726q39 0 66.5 27.5T937-820v365q0 40-27.5 67.5T843-360zm696 126-658 35q-20 2-34.5-11.5T105-243q-2-20 11.5-34.5T149-293l659-35q19-1 33.5 12t16.5 32q1 20-12.5 34.5T813-234m-3 165H150q-20 0-33.5-14T103-117q0-19 13.5-33t33.5-14h660q20 0 33.5 14t13.5 33q0 20-13.5 34T810-69M428-528q63 0 121.5-21T656-613q8 27 29.5 43t49.5 21q9 2 18.5-3.5T763-570v-134q0-12-10-18t-19-4q-29 6-51 22.5T654-661q-48-41-105.5-63.5T428-747q-69 0-128 22.5T193-653q-3 3-5 16l5 16q48 49 107 71t128 22" />
  </Svg>
);
