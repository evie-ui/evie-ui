import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLaptopMacFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M68-123q-28.35 0-48.175-21.119Q0-165.238 0-195h150q-39.05 0-66.525-27.475Q56-249.95 56-289v-482q0-39.463 27.475-67.231Q110.95-866 150-866h660q39.463 0 67.231 27.769Q905-810.463 905-771v482q0 39.05-27.769 66.525Q849.463-195 810-195h150q0 30-20.825 51T889-123zm412-59q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10" />
  </Svg>
);
