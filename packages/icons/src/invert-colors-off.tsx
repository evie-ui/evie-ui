import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInvertColorsOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M781-269 480-570v-214L374-677l-68-67 124-123q10-10 23.5-15t26.5-5q13 0 27 5t24 15l192 190q49 47 76 114t27 130q0 45-13 90t-32 74M480-95q-142 0-243.5-98.5T135-434q0-53 16.5-105.5T205-641L50-796q-11-11-11-25t11-26q12-11 26-11t26 11l746 747q11 11 11 25t-11 25q-11 11-25.5 11T797-50L685-161q-44 32-95 49T480-95m0-94v-178L275-573q-27 35-36.5 70.5T229-434q0 103 74 174t177 71" />
  </Svg>
);
