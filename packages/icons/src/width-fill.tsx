import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWidthFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m275-433 52 53q14 14 14 33.5T327-313q-14 14-33.5 14T261-313L128-446q-7-7-10.5-16t-3.5-18q0-9 3.5-17.5T128-513l132-132q14-15 33.5-14.5T327-644q14 13 14 32.5T327-579l-51 52h409l-54-54q-13-13-12.5-32.5T633-647q13-13 32.5-13t33.5 13l133 134q6 7 9.5 15.5T845-480q0 9-3.5 18t-9.5 16L699-313q-14 13-33 13t-33-14q-14-13-14.5-32.5T632-380l53-53z" />
  </Svg>
);
