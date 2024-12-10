import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNutritionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.937-105Q357-105 271-191.045 185-277.089 185-400q0-97 57-174t149-105.471Q355-688 329-710.5T285-764q-17-30-25-67.51-8-37.509-7-75.49 46-3 88.5 11.5t74.682 42.085q32.182 27.585 51 66.5Q486-748 487-702q14-43 38.808-81 24.809-38 58.192-71 13-13 30.5-13t30.5 13.5q13 13.5 13 30.611T645-792q-24 24-42.5 52T570-681q92 29 148.5 106.385T775-400q0 122.911-86.063 208.955Q602.874-105 479.937-105" />
  </Svg>
);
