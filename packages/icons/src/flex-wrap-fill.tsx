import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlexWrapFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M10-102v-298q0-19.75 13.625-33.875T57-448h176q19.75 0 33.375 14.125T280-400v298q0 19.75-13.625 33.375T233-55H57q-19.75 0-33.375-13.625T10-102m335 0v-298q0-19.75 13.625-33.875T392-448h176q19.75 0 33.375 14.125T615-400v298q0 19.75-13.625 33.375T568-55H392q-19.75 0-33.375-13.625T345-102m335 0v-298q0-19.75 13.625-33.875T727-448h176q19.75 0 33.375 14.125T950-400v298q0 19.75-13.625 33.375T903-55H727q-19.75 0-33.375-13.625T680-102m-248-40h96v-219h-96zM10-560v-298q0-19.75 13.625-33.875T57-906h176q19.75 0 33.375 14.125T280-858v298q0 19.75-13.625 33.375T233-513H57q-19.75 0-33.375-13.625T10-560m335 0v-298q0-19.75 13.625-33.875T392-906h176q19.75 0 33.375 14.125T615-858v298q0 19.75-13.625 33.375T568-513H392q-19.75 0-33.375-13.625T345-560m335 0v-298q0-19.75 13.625-33.875T727-906h176q19.75 0 33.375 14.125T950-858v298q0 19.75-13.625 33.375T903-513H727q-19.75 0-33.375-13.625T680-560M97-600h96v-219H97zm670 0h96v-219h-96z" />
  </Svg>
);
