import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPositionBottomLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm107-201h229q24.333 0 40.167-16.265Q581-328.529 581-352.765 581-377 565.167-393 549.333-409 525-409H295q-24.333 0-40.167 15.765-15.833 15.764-15.833 40Q239-329 255.333-312.5 271.667-296 296-296" />
  </Svg>
);