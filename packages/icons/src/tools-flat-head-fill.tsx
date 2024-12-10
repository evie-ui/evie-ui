import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgToolsFlatHeadFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M350-80q-20 0-33.5-13.5T303-128q0-20 13.5-33.5T350-175h260q20 0 33.5 13.5T657-128q0 21-13.5 34.5T610-80zm-5-154q-19 0-32-12t-15-30l-34-249q-1-10-.5-18t2.5-17l70-285q4-15 16.5-25.5T382-881h196q17 0 29 10.5t16 25.5l71 285q2 9 2.5 17t-.5 18l-34 249q-2 18-15 30t-31 12zm15-333h240l-55-224H416z" />
  </Svg>
);
