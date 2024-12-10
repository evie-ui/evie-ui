import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettingsInputHdmiFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M389-55q-39.8 0-66.9-27.1Q295-109.2 295-149v-35L186-392q-6-10-8.5-21.625T175-437v-141q0-22 11-41.585T215-651v-161q0-37.463 27.975-65.731Q270.95-906 308-906h344q37.463 0 65.731 28.269Q746-849.463 746-812v161q17 12 28.5 31.5T786-578v141q0 11.75-3 23.375T774-392L666-184v35q0 39.8-27.394 66.9Q611.213-55 571-55zm-80-617h81v-54q0-9.8 8.143-17.4 8.143-7.6 18-7.6t17.357 7.6q7.5 7.6 7.5 17.4v54h78v-54q0-9.8 8.143-17.4 8.143-7.6 18-7.6t17.357 7.6q7.5 7.6 7.5 17.4v54h81v-139H309z" />
  </Svg>
);
