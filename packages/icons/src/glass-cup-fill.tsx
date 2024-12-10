import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGlassCupFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M274-55q-35.513 0-63.257-24Q183-103 180-138l-73-651q-5-47.343 26.421-82.172Q164.843-906 212-906h536q47.157 0 78.579 34.828Q858-836.343 853-789l-72 651q-4 35-31 59t-63 24zm-21.131-276H707l53-480H200z" />
  </Svg>
);
