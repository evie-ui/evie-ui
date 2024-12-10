import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgToolsLevelFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M152-258q-39.8 0-66.9-27.1Q58-312.2 58-352v-256q0-40.213 27.1-67.606Q112.2-703 152-703h656q40.213 0 67.606 27.394Q903-648.213 903-608v256q0 39.8-27.394 66.9Q848.213-258 808-258zm213-244h72v-106h-72q-20 0-36.5 15.571-16.5 15.572-16.5 37Q312-535 328.5-518.5 345-502 365-502m159 0h71q21.6 0 37.3-16.286 15.7-16.285 15.7-37Q648-577 632.3-592.5T595-608h-71z" />
  </Svg>
);
