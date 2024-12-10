import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowTopRightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M646-558H269v376q0 19.75-13.675 33.375Q241.649-135 221.825-135 202-135 188.5-148.625 175-162.25 175-182v-376q0-38.75 27.1-66.375T269-652h376L531-766q-14.154-14.4-13.577-32.7.577-18.3 14.63-32.3 14.052-14 33.3-14Q584.6-845 599-831l193 194q6.909 7.167 10.955 16.328Q807-611.511 807-602.756q0 8.756-4.045 17.706Q798.909-576.1 792-569L601-378q-14.364 14-33.182 13.5T534.696-379Q520-393 520.5-412.818 521-432.636 535-447z" />
  </Svg>
);
