import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgVariableRemoveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-255q-20 0-33.5-13.5T95-302v-356q0-20 13.5-34t33.5-14h676q20 0 34 14t14 34v173q-14-5-27.5-7.5T812-495q-78 0-132.5 54.5T625-309q0 14 2.5 27.5T635-255zm670-6-55 55q-11 11-24.5 10.5T709-206q-11-11-11-24t11-24l55-55-55-54q-11-11-11-24t11-24q11-11 24-11t24 11l55 54 54-54q11-11 24.5-10.5T914-411q11 11 11 24t-11 24l-55 54 55 55q11 11 10.5 24.5T914-206q-11 11-24 11t-24-11z" />
  </Svg>
);
