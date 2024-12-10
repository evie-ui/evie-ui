import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPenSize4Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M224-224.141q-32-32.141-32-76T224-376l360-360q32.177-32 76.089-32Q704-768 736-735.859t32 76Q768-616 736-584L376-224q-32.177 32-76.089 32Q256-192 224-224.141" />
  </Svg>
);
