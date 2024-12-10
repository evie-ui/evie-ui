import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMedicalMaskFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-181q-65 0-128.5-5.5T224-201q-36-6-59.5-34T141-301v-5q-63-17-105-64T-6-480q0-63 42.5-108.5T141-653v-27q0-41 28-70.5t69-29.5q30 0 59.5 5.5T357-767q31 2 61.5 3.5T480-762q31 0 61.5-1.5T604-767q29-2 58-7.5t58-5.5q42 0 71 29t29 71v27q61 19 104 65t43 108q0 62-43 108t-104 65v7q0 36-23.5 64T737-202q-65 10-128.5 15.5T480-181m-4-156q40 0 79-5t79-16q16-5 25-21t5-34q-5-17-21-25.5t-33-4.5q-34 10-67.5 14.5T476-424q-32 0-63-4.5T352-443q-18-6-34 4t-21 27q-5 18 4.5 32.5T328-359q35 11 72.5 16.5T476-337m-335-55v-175q-28 10-44 34t-16 53q0 30 16 54.5t44 33.5m679-1q27-9 43.5-33t16.5-54q0-29-17-53t-43-35zM476-497q40 0 79-5t79-16q16-5 25-21t5-34q-5-17-21-25.5t-33-4.5q-34 10-67.5 14.5T476-584q-32 0-63-5t-61-14q-18-4-34 4.5T297-573q-5 18 4 34t27 21q36 11 73 16t75 5" />
  </Svg>
);
