import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPiano = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-38.463 27.475-66.731Q149.95-866 189-866h582q38.463 0 66.731 28.269Q866-809.463 866-771v582q0 39.05-28.269 66.525Q809.463-95 771-95zm0-94h136v-195h-14q-16.15 0-26.075-9.925T275-420.143V-771h-86zm446 0h136v-582h-86v350.857q0 16.293-9.925 26.218T649-384h-14zm-247 0h184v-195h-14q-16.15 0-26.075-9.925T522-420.143V-771h-84v352q0 14.875-10.35 24.938Q417.3-384 402-384h-14z" />
  </Svg>
);
