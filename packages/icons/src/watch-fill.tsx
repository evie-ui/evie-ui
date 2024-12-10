import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWatchFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M429-34q-33 0-58.127-19.325Q345.745-72.649 338-103l-36-129q-57-37-92-101.878t-35-146Q175-561 210.179-626.5 245.358-692 302-729l36-128q7.745-30.351 32.873-49.675Q396-926 429-926h120q24.308 0 42.654 14.5Q610-897 617-874l41.163 144.656q57.021 37.086 92.429 102.715T786-479.878q0 81.122-35.5 146T658-232l-35 129q-9 30-34.072 49.5Q563.855-34 532-34zm51-235q89 0 150-61t61-150q0-89-61-150t-150-61q-89 0-150 61t-61 150q0 89 61 150t150 61" />
  </Svg>
);