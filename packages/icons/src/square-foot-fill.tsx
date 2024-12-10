import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSquareFootFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M207-97q-46 0-78-32t-32-78v-532q0-52 48.5-72t86.5 18l44 44-53 53 29 29 53-53 115 115-53 53 29 29 53-53 116 116-53 53 29 29 53-53 115 115-53 53 29 29 53-53 44 44q41 41 20 93.5T726-97zm4-114h424L211-635z" />
  </Svg>
);
