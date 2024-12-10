import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHangoutVideoOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M415-641h106q19.75 0 33.375 14.188Q568-612.625 568-593v106zm139 140 113-89q18-14 37.5-4t19.5 32v231zm333 330q12-10 19.5-26.5T914-238v-489q0-39.463-27.769-67.231Q858.463-822 819-822H234l95 95h490v487zM142-801l88 74h-69v489h458l-91.436-91H304q-19.75 0-33.375-13.625T257-376v-224L48-808q-11-11-11-25.967 0-14.966 9.956-24.99Q58-870 72.5-870T98-859L870-88q10 11 10 25.5T869-38q-11 11-25.5 11T818-38L713-144H161q-39.05 0-66.525-27.475Q67-198.95 67-238v-489q0-31 18-55.5t46-34.5zm250 335" />
  </Svg>
);
