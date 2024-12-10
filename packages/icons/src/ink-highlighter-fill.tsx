import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInkHighlighterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m377-596 245 246-215 215q-28 28-77 28t-76-28l-10-9-23 22q-13 13-30.5 20.5T154-94H95q-16 0-21.5-15t5.5-26l87-86-2-3q-32-31-32-79.5t32-80.5zm43-44 211-211q28-28 67.5-28t68.5 28l108 109q28 28 27.5 70.5T874-601L666-394z" />
  </Svg>
);
