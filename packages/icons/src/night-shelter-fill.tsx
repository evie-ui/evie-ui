import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNightShelterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-95q-40 0-67-27t-27-67v-377q0-22 9.5-42t27.5-33l251-189q25-19 57-19t57 19l251 189q18 13 28 33t10 42v377q0 40-27.5 67T731-95zm91-205h320v40q0 8 6 14t14 6q8 0 14-6t6-14v-140q0-33-23.5-56.5T600-480h-93q-20 0-33.5 13.5T460-433v93H320v-160q0-8-6-14t-14-6q-8 0-14 6t-6 14v240q0 8 6 14t14 6q8 0 14-6t6-14zm70-60q21 0 35.5-14.5T440-410q0-21-14.5-35.5T390-460q-21 0-35.5 14.5T340-410q0 21 14.5 35.5T390-360" />
  </Svg>
);
