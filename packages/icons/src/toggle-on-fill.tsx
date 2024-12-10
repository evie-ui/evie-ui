import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgToggleOnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M280-217q-109.583 0-186.292-76.794Q17-370.588 17-480.294T93.708-666.5Q170.417-743 280-743h400q109.583 0 186.292 76.794Q943-589.412 943-479.706T866.292-293.5Q789.583-217 680-217zm400.941-162Q723-379 752.5-408.441t29.5-71.5Q782-522 752.559-551.5t-71.5-29.5Q639-581 609.5-551.559t-29.5 71.5Q580-438 609.441-408.5t71.5 29.5" />
  </Svg>
);
