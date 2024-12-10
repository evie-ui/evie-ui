import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgElderlyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M534.08-757q-33.08 0-56.58-23.42-23.5-23.421-23.5-57.5 0-33.08 23.42-56.58 23.421-23.5 56.5-23.5 34.08 0 57.58 23.42 23.5 23.421 23.5 56.5 0 34.08-23.92 57.58-23.921 23.5-57 23.5M695-381q-12 0-21-9t-9-21v-50q-31-3-77.5-27.5T512-542q-8 26-12 54.5t-3 55.5l86 123q5.429 5.913 7.714 13.109Q593-288.696 593-281v213q0 16.75-11.675 28.375Q569.649-28 552.825-28 536-28 524.5-39.625T513-68v-205l-59-60-12 120q-1 4.909-9 22L334-59q-10 13-26.326 15.5T279-51q-13-9-16-25.826T271-107l89-119-9-172q-3-54 5.5-115T381-619l-88 54v80.571Q293-467 281.325-455.5q-11.676 11.5-27.5 11.5Q237-444 225.5-455.625T214-484v-100q0-13.067 6-23.533Q226-618 236-625l142-85q18-10 34.208-16 16.207-6 31.792-6 32.515 0 59.758 26.5Q531-679 559-622q15 38 63.5 64.5T736-524q5 0 12-1.5t13-1.5q34 0 59 27t25 63v379q0 12-9 21t-21 9q-12 0-21-9t-9-21v-379q0-12-9-21t-21-9q-12 0-21 9t-9 21v26q0 12-9 21t-21 9" />
  </Svg>
);
