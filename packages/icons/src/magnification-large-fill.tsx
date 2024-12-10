import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMagnificationLargeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M250-368h378q20 0 33.5-13.5T675-415v-215q0-20-13.5-33.5T628-677H250q-20 0-33.5 13.5T203-630v215q0 20 13.5 33.5T250-368M149-135q-39 0-66.5-27.5T55-229v-502q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-135z" />
  </Svg>
);
