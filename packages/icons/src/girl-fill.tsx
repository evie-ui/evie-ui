import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGirlFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.899-674Q451-674 430-695.601t-21-50.5Q409-775 430.101-796t50-21Q509-817 530-795.899t21 50Q551-717 529.899-695.5t-50 21.5M409-190v-139h-13q-24 0-36.5-19t-4.5-41l68-198q6-17 22.127-28 16.126-11 35-11Q499-626 515-615q16 11 22 28l68 198q8 22-4.5 41T564-329h-13v139q0 19.75-13.646 33.375T503.927-143h-48.146Q436-143 422.5-156.625T409-190" />
  </Svg>
);