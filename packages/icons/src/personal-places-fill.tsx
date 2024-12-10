import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPersonalPlacesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M215-125v-606q0-40 27-67.5t67-27.5h318q24 0 45 11t34 31l86 123q17 24 17 53t-17 53l-86 123q-13 20-34 30.5T627-391H309v266q0 21-13.5 34.5T262-77q-20 0-33.5-13.5T215-125" />
  </Svg>
);
