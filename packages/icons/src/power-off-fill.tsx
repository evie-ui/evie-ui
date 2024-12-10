import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPowerOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M395.263-95Q375-95 361.5-108.5 348-122 348-142v-95L241-356q-13.087-13.429-19.543-30.357Q215-403.286 215-421v-180q0-31 19.5-55t49.5-28v100L84-783q-11-11-11-25t11-25.5Q95-845 109.244-845q14.245 0 25.756 12l698.968 698.968Q846-122 845.5-108.5t-11.5 25Q823-72 808.756-72 794.511-72 783-83L636-230l-23 25.638V-142q0 20-14.062 33.5Q584.875-95 565-95zM715-337 327-725v-93q0-19.875 13.5-33.938Q354-866 373.912-866q19.913 0 34 14.062Q422-837.875 422-818v123h117v-123q0-19.875 13.5-33.938Q566-866 586-866t33.5 14.062Q633-837.875 633-818v170l-47-47h65q40.463 0 67.731 27.769Q746-639.463 746-599v191q0 17.511-6.5 34.256Q733-357 720-344z" />
  </Svg>
);
