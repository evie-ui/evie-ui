import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNetworkLockedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M700.819-55Q685-55 671.5-69.706 658-84.412 658-100.055V-229q0-16 13.5-30t29.8-14H700v-40q0-38.175 25.164-64.087Q750.327-403 787.664-403 825-403 850-377.087q25 25.912 25 64.087v40q16 0 29 14t13 30v129.233Q917-84 903.5-69.5T874.88-55zM746-273h84v-40q0-20-11.5-33T788-359q-20 0-31 13t-11 33zM168-55q-31.25 0-43.125-29T136-136l689-689q22-22 51.5-10.125T906-792v329H788q-80.17 0-135.085 54.915Q598-353.17 598-273v218z" />
  </Svg>
);
