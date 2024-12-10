import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInkHighlighter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M519-382 408-493 219-305l112 112zm-44-179 112 112 220-220-111-112zm-101-33 246 246-213 213q-28 28-77 28t-76-28l-10-9-23 22q-13 13-30.5 20.5T154-94H95q-16 0-21.5-15t5.5-26l87-86-3-4q-32-31-31.5-79t32.5-80zm0 0 257-257q28-28 67.5-28t68.5 28l108 109q28 28 27.5 70.5T874-601L620-348z" />
  </Svg>
);
