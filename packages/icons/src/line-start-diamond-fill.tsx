import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineStartDiamondFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M326-213 93-446q-14-14-14-34t14-34l233-233q14-14 34-14t34 14l220 220h236q20 0 33.5 13.5T897-480q0 20-13.5 33.5T850-433H614L394-213q-14 14-34 14t-34-14" />
  </Svg>
);
