import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRemoveFromQueueFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M350-481h260q20 0 33.5-13.5t13.5-33.412q0-19.913-13.5-34Q630-576 610-576H350q-20 0-33.5 14.088-13.5 14.087-13.5 34Q303-508 316.5-494.5T350-481M149-175q-39.05 0-66.525-27.475Q55-229.95 55-269v-502q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v502q0 39.05-27.769 66.525Q850.463-175 811-175H644v33q0 20-14.062 33.5Q615.875-95 596-95H364q-20 0-33.5-13.5T317-142v-33z" />
  </Svg>
);
