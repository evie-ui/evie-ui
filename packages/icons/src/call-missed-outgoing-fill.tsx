import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCallMissedOutgoingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M771-534 545-308q-14 14-31 20.5t-35 6.5q-18 0-35-6.5T413-308L127-594q-14-14-14-33.158t13.609-33Q141-674 160.467-674q19.466 0 33.533 14l285 285 228-229H567q-19.75 0-33.375-13.675Q520-631.351 520-652.175 520-672 533.625-685.5 547.25-699 567-699h251q19.75 0 33.875 13.625T866-652v258q0 20.75-14.175 34.375-14.176 13.625-34 13.625Q798-346 784.5-359.625 771-373.25 771-394z" />
  </Svg>
);
