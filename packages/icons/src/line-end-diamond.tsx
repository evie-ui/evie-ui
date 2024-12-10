import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLineEndDiamond = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m600-313 167-167-167-167-167 167zm-34 100L346-433H110q-20 0-33.5-13.5T63-480q0-20 13.5-33.5T110-527h236l220-220q14-14 34-14t34 14l233 233q14 14 14 34t-14 34L634-213q-14 14-34 14t-34-14m34-267" />
  </Svg>
);
