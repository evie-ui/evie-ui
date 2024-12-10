import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineEndCircleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M640-225q-94 0-163.5-59.5T391-433H110q-20 0-33.5-13.5T63-480q0-20 13.5-33.5T110-527h281q16-89 85.5-148.5T640-735q107 0 181 74t74 181q0 107-74 181t-181 74" />
  </Svg>
);
