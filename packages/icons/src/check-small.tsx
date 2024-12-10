import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCheckSmall = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m400-427 238-238q15-14 33-14t33 14q15 15 15 33.5T704-598L434-327q-14 14-34 14t-34-14L255-438q-14-15-14-33.5t15-33.5q15-14 33.5-14t33.5 14z" />
  </Svg>
);
