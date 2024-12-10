import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgQueryStatsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m40-336 152-242q13-20 37-22t40 16l63 75 106-171q13-22 39-22.5t40 21.5l89 133q-24 5-45.5 15T519-508l-39-60-100 164q-13 20-37 22t-39-16l-66-76-118 188q-11 17-30.5 21T53-273q-15-10-18.5-29t5.5-34M876-17 739-154q-20 13-43 19t-46 6q-75 0-128-53t-53-128q0-75 53-128.5T650-492q75 0 128 53.5T831-310q0 24-7 46.5T806-220L943-85zM650-223q36 0 61.5-25.5T737-310q0-36-25.5-62T650-398q-36 0-61.5 26T563-310q0 36 25.5 61.5T650-223m88-314q-25-11-51-13t-52-1l206-331q11-18 31.5-22t36.5 8q15 11 18.5 29.5T921-833z" />
  </Svg>
);