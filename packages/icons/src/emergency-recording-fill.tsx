import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEmergencyRecordingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M359-408v73q0 17 12 29t29 12q17 0 29-12t12-29v-73l68 39q14 8 30.5 3.5T564-386q9-14 4.5-30.5T550-442l-67-38 67-39q14-8 18-24.5t-4-31.5q-9-15-25-19.5t-30 3.5l-68 39v-73q0-17-12-29t-29-12q-17 0-29 12t-12 29v73l-69-39q-15-7-31-2.5T235-575q-8 16-4 32.5t20 24.5l66 38-66 38q-15 9-19 25.5t5 31.5q8 15 24 19.5t31-3.5zM149-135q-39 0-66.5-27.5T55-229v-502q0-39 27.5-67t66.5-28h502q39 0 67 28t28 67v206l119-119q10-11 25.5-5t15.5 21v296q0 15-15.5 21t-25.5-5L746-435v206q0 39-28 66.5T651-135z" />
  </Svg>
);
