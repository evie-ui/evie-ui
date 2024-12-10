import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSegment = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M382-203q-19.75 0-33.375-13.675Q335-230.351 335-251.175 335-271 348.625-284.5 362.25-298 382-298h436q19.75 0 33.875 13.675Q866-270.649 866-250.825 866-230 851.875-216.5 837.75-203 818-203zm0-230q-19.75 0-33.375-13.675Q335-460.351 335-480.175 335-500 348.625-513.5 362.25-527 382-527h436q19.75 0 33.875 13.675Q866-499.649 866-479.825 866-460 851.875-446.5 837.75-433 818-433zM142-662q-19.75 0-33.375-13.675Q95-689.351 95-710.175 95-730 108.625-743.5 122.25-757 142-757h676q19.75 0 33.875 13.675Q866-729.649 866-709.825 866-689 851.875-675.5 837.75-662 818-662z" />
  </Svg>
);
