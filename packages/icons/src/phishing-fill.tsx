import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPhishingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M439-95q-108 0-186-70.5T175-341v-221q0-15 14.5-20.5T215-578l157 153q15 14 15 33.5T372-357q-14 14-32.5 14.5T307-354l-39-37v55q0 65 51.5 106.5T439-188q68 0 119-43.5T609-341v-140q-36-14-59.5-45T526-596q0-38 23.5-69t59.5-46v-148q0-20 13.5-33.5T656-906q20 0 33.5 13.5T703-859v148q35 15 59 46t24 69q0 39-24 69.5T703-481v140q0 105-78.5 175.5T439-95" />
  </Svg>
);
