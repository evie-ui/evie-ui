import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgIncompleteCircleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.138-55Q392-55 314.513-88.084q-77.488-33.083-135.417-91.012T88.084-314.38Q55-391.735 55-479.879q0-89.457 33-166.789T179-781l301 301v-426q89 0 166.606 33.454 77.605 33.453 135.012 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480q0 88.276-33.531 165.747-33.531 77.471-91.013 135.278-57.481 57.808-134.831 90.891Q569.276-55 480.138-55" />
  </Svg>
);
