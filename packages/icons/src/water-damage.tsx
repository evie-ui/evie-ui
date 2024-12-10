import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWaterDamage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-196v-273h-77q-16.5 0-22.25-15T96-510l353-317q13.186-11 31.093-11T511-827l354 317q11 11 5.25 26T849-469h-78v273q0 19.75-13.625 33.375T724-149H236q-19.75 0-33.375-13.625T189-196m94-47h394v-309L480-728 283-551.805zm197.089-84Q514-327 537.5-350.562 561-374.125 561-408q0-27-12-51.5T480-566q-57 82-69 106.5T399-408q0 33.875 23.589 57.438Q446.177-327 480.089-327M480-490" />
  </Svg>
);
