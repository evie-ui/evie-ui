import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVolumeMute = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M430-335H302q-20 0-33.5-13.5T255-382v-196q0-20 13.5-34t33.5-14h128l155-155q23-22 52-10t29 43v535q0 32-29 44t-52-11zm-81-94h122l100 96v-293l-100 95H349zm110-51" />
  </Svg>
);
