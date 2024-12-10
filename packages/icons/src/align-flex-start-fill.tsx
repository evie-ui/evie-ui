import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlignFlexStartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M102-811q-19.75 0-33.375-13.675Q55-838.351 55-858.175 55-878 68.625-892 82.25-906 102-906h756q19.75 0 33.875 14.175 14.125 14.176 14.125 34Q906-838 891.875-824.5 877.75-811 858-811zm358 662q-19.75 0-33.375-13.625T413-196v-484q0-19.75 13.625-33.375T460-727h40q19.75 0 33.375 13.625T547-680v484q0 19.75-13.625 33.375T500-149z" />
  </Svg>
);
