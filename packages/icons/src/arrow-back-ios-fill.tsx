import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgArrowBackIosFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m161-480 303 303q16 16 16.5 39.5T465-97q-17 17-41 17t-41-17L66-414q-14-14-20.5-31T39-480q0-18 6.5-35T66-546l318-318q17-17 40-16.5t40 16.5q16 17 16.5 40.5T464-783z" />
  </Svg>
);
