import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLaptopWindows = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M35-123q-14.875 0-24.938-10.37Q0-143.74 0-159.07q0-14.905 10.35-25.418Q20.7-195 36-195h114v-42q-39.05 0-66.525-27.475Q56-291.95 56-331v-440q0-39.463 27.475-67.231Q110.95-866 150-866h660q39.463 0 67.231 27.769Q905-810.463 905-771v440q0 39.05-27.769 66.525Q849.463-237 810-237v42h115q14.875 0 24.938 10.693Q960-173.614 960-158.702q0 14.913-10.35 25.307Q939.3-123 924-123zm115-208h660v-440H150zm0 0v-440z" />
  </Svg>
);
