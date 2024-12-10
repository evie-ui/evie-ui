import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLineStartCircleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M320-225q-107 0-181-74T65-480q0-107 74-181t181-74q94 0 163.5 59.5T569-527h281q20 0 33.5 13.5T897-480q0 20-13.5 33.5T850-433H569q-16 89-85.5 148.5T320-225" />
  </Svg>
);
