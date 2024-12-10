import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHorizontalSplit = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-177q-19.75 0-33.375-13.625T95-224v-226q0-19.75 13.625-33.375T142-497h676q19.75 0 33.875 13.625T866-450v226q0 19.75-14.125 33.375T818-177zm0-369q-19.75 0-33.375-13.675Q95-573.351 95-593.175 95-613 108.625-626.5 122.25-640 142-640h676q19.75 0 33.875 13.675Q866-612.649 866-592.825 866-573 851.875-559.5 837.75-546 818-546zm0-143q-19.75 0-33.375-13.675Q95-716.351 95-736.175 95-756 108.625-769.5 122.25-783 142-783h676q19.75 0 33.875 13.675Q866-755.649 866-735.825 866-716 851.875-702.5 837.75-689 818-689z" />
  </Svg>
);
