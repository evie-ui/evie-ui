import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMenstrualHealth = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-911q44 54 83.5 110T638-688l250-187v395q0 81-33.5 156t-89 132.5Q710-134 636-99.5T480-65q-82 0-156-34.5t-129.5-92Q139-249 106-324T73-480v-395l249 186q35-56 74.5-112T480-911M160-701v221q0 39 12.5 72.5T207-347q-7-15-10.5-31.5T193-412q7-40 31-93t56-111zm320-71q-80 99-144 209.5T272-360q0 87 60.5 147.5T480-152q87 0 147.5-60.5T688-360q0-92-64-203.5T480-772m321 71-121 86q32 57 56 111t32 92q0 17-4 33.5T753-347q22-27 35-60.5t13-72.5z" />
  </Svg>
);