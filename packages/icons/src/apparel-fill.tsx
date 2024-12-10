import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgApparelFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m225-515-40 22q-19 7-39 1.5T117-515L37-659q-12-21-6-37.5T56-724l244-142h76q19 0 32 13t13 32v20q0 28 16 44t44 16q28 0 44-16t16-44v-20q0-19 12.5-32t32.5-13h75l244 142q19 11 24.5 27.5T924-659l-81 144q-9 17-32.5 24t-39.5 1l-38-28v359q0 26-20.5 45T666-95H289q-26 0-45-19t-19-45z" />
  </Svg>
);