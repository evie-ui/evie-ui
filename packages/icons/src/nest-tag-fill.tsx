import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestTagFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.874-55Q356-55 270.5-140.667t-85.5-209.6q0-95.733 56.5-173.457Q298-601.448 393-633v-217q0-19 13.625-33T440-897h80q19 0 33 14t14 33v217q94 31.552 151.5 109.276Q776-446 776-350.267q0 123.933-86.608 209.6Q602.783-55 479.874-55m.02-94Q563-149 622-207.369q59-58.37 59-142.525Q681-433 622.116-492t-141.975-59Q396-551 337.5-492.116 279-433.232 279-350.141 279-266 337.369-207.5q58.37 58.5 142.525 58.5" />
  </Svg>
);
