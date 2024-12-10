import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShield = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-60q-8.32 0-15.88-1.5Q456.56-63 450-66q-144-47-229.5-177.597Q135-374.193 135-523.106V-712q0-30.257 16.375-55.162Q167.75-792.068 196-802l251-94q16-6 33-6t33 6l251 94q28.25 9.932 45.125 34.838Q826-742.257 826-712v188.894q0 148.913-86 279.509Q654-113 510-66q-6.56 3-14.12 4.5T480-60m0-91q110-43 180.5-144T731-522.706V-712l-251-95-251 95.484v188.345Q229-396 299.5-295 370-194 480-151m0-328" />
  </Svg>
);
