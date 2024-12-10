import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLineStartArrowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M462-219 116-441q-23-13.786-23-38.893T116-519l346-222q24-15 48.5-1.692Q535-729.383 535-701v174h315q19.75 0 33.375 13.675Q897-499.649 897-479.825 897-460 883.375-446.5 869.75-433 850-433H535v173q0 29.383-24.5 42.691Q486-204 462-219" />
  </Svg>
);
