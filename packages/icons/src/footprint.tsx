import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFootprint = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M311-228q-73 0-118-54.5T148-419v-3l-16-24q-24-35-44-101T68-682q0-107 54.5-178.5T259-932q84 0 138.5 74T452-682q0 46-11.5 91.5T410-496l5 8q15 25 26 57.5t11 62.5q0 59-39.5 99.5T311-228M199-502l130-28q14-41 25-81.5t11-72.5q0-62-28.5-111.5T260-845q-43 0-74 44.5T155-676q0 57 16.5 103t27.5 71m113 187q25 0 39-16.5t14-39.5q0-17-8-37.5T339-443l-104 21q1 40 21 73.5t56 33.5M649-28q-62 0-101.5-40.5T508-168q0-30 11-62.5t27-57.5l5-8q-20-48-31.5-94T508-482q0-102 54.5-176T702-732q81 0 135.5 71.5T892-482q0 68-20 132.5T828-246l-16 25v2q0 82-45 136.5T649-28m112-279q10-19 27-68t17-105q0-76-31-120.5T700-645q-48 0-76.5 49.5T595-482q0 26 9.5 65.5T633-325zM647-115q36 0 56.5-35t21.5-74l-106-16q-9 16-16.5 34.5T595-172q0 26 14 41.5t38 15.5" />
  </Svg>
);
