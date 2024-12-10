import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTvFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-185q-39.05 0-66.525-27.769Q55-240.538 55-280v-491q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v491q0 39.462-27.769 67.231Q850.463-185 811-185H644v43q0 20-14.062 33.5Q615.875-95 596-95H364q-20 0-33.5-13.5T317-142v-43z" />
  </Svg>
);
