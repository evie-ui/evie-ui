import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGoToLineFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.882-683q-27.965 0-47.424-19.576Q413-722.152 413-750.118q0-27.965 19.576-47.424Q452.152-817 480.118-817q27.965 0 47.424 19.576Q547-777.848 547-749.882q0 27.965-19.576 47.424Q507.848-683 479.882-683m0 540q-27.965 0-47.424-19.576Q413-182.152 413-210.118q0-27.965 19.576-47.424Q452.152-277 480.118-277q27.965 0 47.424 19.576Q547-237.848 547-209.882q0 27.965-19.576 47.424Q507.848-143 479.882-143" />
  </Svg>
);