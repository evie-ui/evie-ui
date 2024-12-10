import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSouthWest = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M230-183q-19.75 0-33.375-13.625T183-230v-336q0-19.75 13.675-33.375Q210.351-613 230.175-613 250-613 263.5-599.375 277-585.75 277-566v223l448-448q14-14 33-14t33 14q14 14 14 33.5T791-724L343-277h223q19.75 0 33.375 13.675Q613-249.649 613-229.825 613-210 599.375-196.5 585.75-183 566-183z" />
  </Svg>
);