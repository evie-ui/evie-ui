import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCheckSmallFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m402-427 238-238q14-14 32.5-14t33.5 14q14 15 14 33.5T706-598L436-327q-15 14-34.5 14T368-327L257-438q-15-15-14.5-33.5T258-505q14-14 33-14t34 14z" />
  </Svg>
);
