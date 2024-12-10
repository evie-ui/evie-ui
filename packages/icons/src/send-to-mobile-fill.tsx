import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSendToMobileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M726-451H510q-13 0-21.5-8.5T480-481q0-13 8.5-21.5T510-511h216l-61-60q-9-8-9-20.5t9-21.5q9-9 21-9t21 9l98 98q14 14.727 14 34.364Q819-461 805-447l-98 98q-8 8-20.5 8.5T665-349q-9-9-9-21t9-21zM271-17q-39.025 0-66.513-27.487Q177-71.975 177-111v-738q0-39.025 27.487-66.512Q231.975-943 271-943h418q39.025 0 66.512 27.488Q783-888.025 783-849v135h-94v-45H271v558h418v-45h94v135q0 39.025-27.488 66.513Q728.025-17 689-17z" />
  </Svg>
);
