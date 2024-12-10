import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestAudioFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M360-86q-80.975 0-137.488-56.512Q166-199.025 166-280v-360q0-97.09 68.455-166.045Q302.91-875 400-875h160q97.09 0 166.045 68.955Q795-737.09 795-640v360q0 80.975-57.013 137.488Q680.975-86 600-86zm.5-364q12.5 0 21-9t8.5-21.5q0-12.5-8.625-21T360-510q-12 0-21 8.625T330-480q0 12 9 21t21.5 9m120 0q12.5 0 21-9t8.5-21.5q0-12.5-8.625-21T480-510q-12 0-21 8.625T450-480q0 12 9 21t21.5 9m120 0q12.5 0 21-9t8.5-21.5q0-12.5-8.625-21T600-510q-12 0-21 8.625T570-480q0 12 9 21t21.5 9" />
  </Svg>
);
