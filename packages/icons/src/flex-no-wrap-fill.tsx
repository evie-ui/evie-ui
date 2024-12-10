import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlexNoWrapFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M10-311v-338q0-19.75 13.625-33.875T57-697h176q19.75 0 33.375 14.125T280-649v338q0 19.75-13.625 33.375T233-264H57q-19.75 0-33.375-13.625T10-311m335 0v-338q0-19.75 13.625-33.875T392-697h176q19.75 0 33.375 14.125T615-649v338q0 19.75-13.625 33.375T568-264H392q-19.75 0-33.375-13.625T345-311m335 0v-338q0-19.75 13.625-33.875T727-697h176q19.75 0 33.375 14.125T950-649v338q0 19.75-13.625 33.375T903-264H727q-19.75 0-33.375-13.625T680-311M97-351h96v-259H97zm670 0h96v-259h-96z" />
  </Svg>
);
