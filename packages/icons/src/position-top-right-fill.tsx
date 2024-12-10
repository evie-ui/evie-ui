import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPositionTopRightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm247-456h229q24.333 0 40.167-16.265Q721-583.529 721-607.765 721-632 705.167-648 689.333-664 665-664H435q-24.333 0-40.167 15.765-15.833 15.764-15.833 40Q379-584 395.333-567.5 411.667-551 436-551" />
  </Svg>
);
