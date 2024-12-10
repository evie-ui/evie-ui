import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOnHubDeviceFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M344-80q-20 0-33.5-13.5T297-127q0-20 13.5-33.5T344-174h272q20 0 33.5 13.5T663-127q0 20-13.5 33.5T616-80zm-50-168-39-557q-3-37 18.5-58.5T332-885h297q36 0 57.5 21.5T705-805l-39 557q-1 19-14.5 31.5T619-204H341q-19 0-32.5-12.5T294-248" />
  </Svg>
);
