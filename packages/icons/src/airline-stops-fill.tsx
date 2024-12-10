import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAirlineStopsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M434-269q-11-134-104-227T106-603q-21-3-36-17t-15-34q0-20 14-33.5t33-12.5q122 11 223 78t154 178q33-80 92-143t137-104h-94q-20 0-33.5-13.5T567-738q0-20 13.5-34t33.5-14h204q20 0 34 14t14 34v210q0 20-14 33.5T818-481q-20 0-33.5-13.5T771-528v-89q-104 49-169.5 141.5T527-269h35q20 0 34 13.5t14 33.5q0 20-14 33.5T562-175H399q-20 0-33.5-13.5T352-222q0-20 13.5-33.5T399-269z" />
  </Svg>
);
