import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPropaneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M407-711h146v-50H407zm-50 510v70q0 20.75-13.675 34.375Q329.649-83 309.825-83 290-83 276.5-96.625 263-110.25 263-131v-71q-100-7-169-79.625T25-456q0-106.25 74.375-180.625T280-711h23v-60q0-39.463 27.475-67.231Q357.95-866 397-866h166q39.05 0 66.525 27.769Q657-810.463 657-771v60h23q106.25 0 180.625 74.375T935-456q0 101.75-69 174.375T697-202v71q0 20.75-13.675 34.375Q669.649-83 649.825-83 630-83 616.5-96.625 603-110.25 603-131v-70z" />
  </Svg>
);
