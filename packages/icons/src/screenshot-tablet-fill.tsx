import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScreenshotTabletFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M111-135q-39.025 0-66.513-27.487Q17-189.975 17-229v-502q0-39.438 27.487-67.219Q71.975-826 111-826h738q39.025 0 66.512 27.781Q943-770.438 943-731v502q0 39.025-27.488 66.513Q888.025-135 849-135zm90-94h558v-502H201zm423-145h-82q-16 0-27 11t-11 26q0 15 11 26t27 11h122q14.633 0 24.817-10.4Q699-320.8 699-335v-122q0-15-11-26t-26.5-11q-15.5 0-26.5 11t-11 26zM336-597h83q15 0 26-11t11-26q0-15-11-26t-26-11H297q-14.633 0-25.317 10.183Q261-650.633 261-636v122q0 15 11 26t26.5 11q15.5 0 26.5-11t11-26z" />
  </Svg>
);