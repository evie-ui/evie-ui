import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPergola = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-142v-716q0-19.625 13.675-33.812Q122.351-906 142.175-906 162-906 175.5-891.812 189-877.625 189-858v32h582v-32q0-19.625 13.675-33.812Q798.351-906 818.088-906q19.737 0 33.824 14.188Q866-877.625 866-858v716q0 19.75-14.263 33.375t-34 13.625Q798-95 784.5-108.625 771-122.25 771-142v-395H189v395q0 19.75-13.675 33.375Q161.649-95 141.825-95 122-95 108.5-108.625 95-122.25 95-142m94-489h582v-100H189zm244 489v-64h-71q-20.75 0-34.375-13.675Q314-233.351 314-253.175 314-273 327.625-286.5 341.25-300 362-300h237q19.75 0 33.375 13.675Q646-272.649 646-252.825 646-233 632.375-219.5 618.75-206 599-206h-72v64q0 19.75-13.675 33.375Q499.649-95 479.825-95 460-95 446.5-108.625 433-122.25 433-142M189-631v-100z" />
  </Svg>
);
