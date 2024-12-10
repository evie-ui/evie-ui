import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVolumeDown = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M344-335H217q-21 0-34.5-13.5T169-382v-196q0-20 13.5-34t34.5-14h127l155-154q22-23 51.5-11t29.5 43v535q0 32-29.5 44T499-180zm427-145q0 53-27.5 96.5T666-316q-10 5-18-1t-8-17v-293q0-11 8-16.5t18-.5q50 24 77.5 68t27.5 96M485-626l-100 95H264v102h121l100 96zM372-480" />
  </Svg>
);
