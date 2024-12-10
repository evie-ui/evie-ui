import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMediaBluetoothOn = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M265-92q-70 0-118.5-48.5T98-259q0-70 48.5-118.5T265-426q20 0 39.5 5t33.5 16v-416q0-20 13.5-34t33.5-14h191q20 0 33.5 14t13.5 34v75q0 20-13.5 33.5T576-699H432v440q0 70-48.5 118.5T265-92m419-252L559-469q-8-8-7.5-17.5T560-504q7-8 17-8t18 8l99 100v-104q0-21 15-33.5t33-12.5q8 0 17 3.5t16 10.5l56 55q6 7 9.5 15.5T844-452q0 10-3 18.5T831-418l-75 74 75 75q7 7 10.5 16t3.5 18q0 9-4 17t-11 15l-54 55q-8 8-17 11t-17 3q-18 0-32.5-13T695-182v-102L594-183q-8 8-17.5 7.5T560-184q-8-8-8-18t8-18zm58 165 58-57-58-57zm-1-216 58-57-58-57z" />
  </Svg>
);
