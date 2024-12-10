import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgGradientFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189.736-95q-38.786 0-66.761-27.975Q95-150.95 95-189.789v-581.422q0-38.252 27.975-66.52Q150.95-866 189.736-866h581.528q38.199 0 66.467 28.269Q866-809.463 866-771.211v581.422q0 38.839-28.269 66.814Q809.463-95 771.264-95zM439-524v84h82v-84zm-167 0v84h83v-84zm83 84v83h84v-83zm166 0v83h83v-83zm-332 0v83h83v-83zm415-84v84h83.5v83H771v-83h-83.5v-84zM271.5-357v84H189v84h83.5v-84h82.833v84h82.834v-84h82.583v84h83.75v-84h83.75v84H771v-84h-83.5v-84h-83.167v84h-83.166v-84H438.5v84H355v-84zM771-524v84zm0 167v84z" />
  </Svg>
);
