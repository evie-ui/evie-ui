import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVideoStableFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39 0-66.5-27.5T55-229v-502q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-135zm547-141 71-268q5-19-4.5-36.5T733-603L322-719q-19-5-36 5t-22 29l-70 270q-5 19 4.5 36t28.5 22l410 115q20 6 37-4t22-30" />
  </Svg>
);
