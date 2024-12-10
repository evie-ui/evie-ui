import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPanoramaVerticalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M200-55q-27 0-46-19t-19-45.6q0-15.4 9-42.4t20.5-71q11.5-44 21-104.5T195-480q0-82-9.5-142.731Q176-683.462 165-727q-12-44-21-71t-9-42.333q0-26.459 19-46.063Q173-906 200-906h560q26.6 0 46.3 19.604 19.7 19.604 19.7 46.063Q826-825 816.5-798t-21 71Q784-683 775-622.5T766-480q0 82 9 142.5T795.5-233q11.5 44 21 71t9.5 42.4Q826-93 806.3-74T760-55z" />
  </Svg>
);
