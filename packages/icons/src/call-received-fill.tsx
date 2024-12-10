import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCallReceivedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M224-175q-19.75 0-33.375-13.625T177-223v-336q0-19.75 13.675-33.375Q204.351-606 224.175-606 244-606 257.5-592.375 271-578.75 271-559v223l456-455q14-14 32.5-14t33.5 14q14 14 14 33t-14 33L337-270h223q19.75 0 33.375 13.675Q607-242.649 607-222.825 607-202 593.375-188.5 579.75-175 560-175z" />
  </Svg>
);
