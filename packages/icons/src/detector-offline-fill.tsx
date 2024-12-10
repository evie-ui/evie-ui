import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDetectorOfflineFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-153-56 56q-15 15-33 14.5T358-98q-15-14-15-33t15-33l55-56-56-56q-14-14-14-33t15-33q15-15 33.5-15t33.5 15l55 56 56-56q15-15 33.5-15t33.5 15q14 14 14 33t-14 33l-56 56 56 56q14 15 14 33.5T603-98q-15 15-33.5 15T536-98zM297-647l18 60h331l17-60zm18 155q-34 0-59.5-20T222-565l-22-82h-41q-40 0-67-27t-27-67v-155h831v155q0 40-27.5 67T801-647h-41l-23 83q-8 32-34.5 52T643-492z" />
  </Svg>
);
