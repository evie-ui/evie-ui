import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLaptopWindowsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M35-123q-15.125 0-25.063-10.195Q0-143.389 0-158.895q0-15.08 10.225-25.593Q20.45-195 36-195h114v-42q-39.05 0-66.525-27.475Q56-291.95 56-331v-440q0-39.463 27.475-67.231Q110.95-866 150-866h660q39.463 0 67.231 27.769Q905-810.463 905-771v440q0 39.05-27.769 66.525Q849.463-237 810-237v42h115q15.125 0 25.062 10.518Q960-173.965 960-158.877q0 15.088-10.225 25.482Q939.55-123 924-123z" />
  </Svg>
);