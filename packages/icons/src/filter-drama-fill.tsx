import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFilterDramaFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M253-135q-97 0-166.5-68T17-367q0-81 56.5-134.5T211-555q71 0 124.5 38.5T402-414q3 15 12.5 24.5T438-380q16 0 26-11t8-25q-17-84-89-147.5T194-627q36-87 117.5-143T481-826q117 0 198.5 84T770-543v24q80 12 126.5 64T943-327q0 80-56 136t-136 56z" />
  </Svg>
);
