import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFormatImageRightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M483-266q-19.75 0-33.375-13.625T436-313v-334q0-19.625 13.625-33.812Q463.25-695 483-695h335q19.75 0 33.375 14.188Q865-666.625 865-647v334q0 19.75-13.625 33.375T818-266zm47-87h240v-255H530zM138-95q-17.625 0-30.312-12.763Q95-120.526 95-138.263 95-156 107.688-169q12.687-13 30.312-13h684q18.05 0 31.025 12.965Q866-156.07 866-138.035T853.025-107.5Q840.05-95 822-95zm0-171q-17.625 0-30.312-12.763Q95-291.526 95-309.263 95-327 107.688-340q12.687-13 30.312-13h194q18.75 0 31.375 12.965t12.625 31Q376-291 363.375-278.5T332-266zm0-171q-17.625 0-30.312-12.763Q95-462.526 95-480.263 95-498 107.688-511q12.687-13 30.312-13h194q18.75 0 31.375 12.965t12.625 31Q376-462 363.375-449.5T332-437zm0-171q-17.625 0-30.312-12.763Q95-633.526 95-651.263 95-669 107.688-682q12.687-13 30.312-13h194q18.75 0 31.375 12.965t12.625 31Q376-633 363.375-620.5T332-608zm0-171q-17.625 0-30.312-12.763Q95-804.526 95-822.263 95-840 107.688-853q12.687-13 30.312-13h684q18.05 0 31.025 12.965Q866-840.07 866-822.035T853.025-791.5Q840.05-779 822-779z" />
  </Svg>
);
