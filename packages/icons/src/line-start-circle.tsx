import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLineStartCircle = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M320-320q67 0 114-46.5T481-480q0-67-47-114t-114-47q-67 0-113.5 47T160-480q0 67 46.5 113.5T320-320m0 95q-107 0-181-74T65-480q0-107 74-181t181-74q94 0 163.5 59.5T569-527h281q19.75 0 33.375 13.675Q897-499.649 897-479.825 897-460 883.375-446.5 869.75-433 850-433H569q-16 89-85.693 148.5T320-225m0-255" />
  </Svg>
);
