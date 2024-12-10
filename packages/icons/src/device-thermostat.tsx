import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDeviceThermostat = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.852-55Q386-55 320.5-120.445T255-280.466Q255-333 277.5-381q22.5-48 68.5-73v-317q0-56.25 38.674-95.625T479.647-906q56.299 0 95.826 39.375Q615-827.25 615-771v317q45 25.275 68 73.237Q706-332.8 706-280q0 94.11-66.148 159.555Q573.703-55 479.852-55M440-513h80v-51h-40v-47h40v-79h-40v-46.5h40V-771q0-16.825-11.623-28.412Q496.754-811 479.877-811 463-811 451.5-799.412 440-787.825 440-771z" />
  </Svg>
);
