import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMonitorHeartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-221h246l72 144q4 8 11.5 12t15.5 4q8 0 15.5-4t11.5-12l133-266 53 106q4 8 11.5 12t15.5 4h266v221q0 39.05-27.769 66.525Q850.463-135 811-135zM55-510v-221q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v221H659l-72-143q-4-8-11.5-11.5T560-668q-8 0-15.5 3.5T533-653L400-388l-53-106q-4-8-11.5-12t-15.5-4z" />
  </Svg>
);
