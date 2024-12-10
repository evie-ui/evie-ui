import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHMobiledata = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M346-444v134q0 15.3-9.975 25.65-9.976 10.35-26.2 10.35-16.225 0-26.025-9.925Q274-293.85 274-310v-340q0-15.3 9.975-25.65 9.976-10.35 26.2-10.35 16.225 0 26.025 9.925 9.8 9.925 9.8 26.323V-516h268v-134q0-15.3 9.975-25.65 9.976-10.35 26.2-10.35 16.225 0 26.025 9.925Q686-666.15 686-650v340q0 15.3-9.975 25.65-9.976 10.35-26.2 10.35-16.225 0-26.025-9.925-9.8-9.925-9.8-26.323V-444z" />
  </Svg>
);
