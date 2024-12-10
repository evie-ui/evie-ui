import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M847-46 120-771q-10-10.067-10-24.533Q110-810 121.053-821q10.631-11 25.5-11 14.868 0 25.447 11L897-95zM330.245-325q-12.854 0-21.55-8.675-8.695-8.676-8.695-21.5 0-12.825 8.695-21.325 8.696-8.5 21.55-8.5h276.266L667-325zM891-201l-71-73v-426H393l-95-95h522q39.463 0 67.231 27.769Q915-739.463 915-700v437q0 18-6.5 33.5T891-201m-751 35q-39.05 0-66.525-27.975Q46-221.95 46-260v-440q0-37.463 25.5-64.231Q97-791 134-794h63l95 94H140v440h592l94 94zM232.825-575Q220-575 211.5-583.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5M506-589l-41-42q2.778-1.75 6.923-2.875t8.233-1.125q12.844 0 21.344 8.625Q510-617.75 510-605q0 4-1.125 8.625T506-589m97.825 14Q591-575 582.5-583.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5m123 0Q714-575 705.5-583.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5m-494 125Q220-450 211.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5m124 0Q344-450 335.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5M630-465l-42-41q2.778-1.75 7.444-2.875 4.667-1.125 8.712-1.125 12.844 0 21.344 8.625Q634-492.75 634-480q0 4.043-1.125 8.147Q631.75-467.75 630-465m96.825 15Q714-450 705.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5" />
  </Svg>
);
