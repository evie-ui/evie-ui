import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNoteStackFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M279-149v-437q0-40 27-68t66-28h439q40 0 67.5 27.5T906-587v324L697-55H373q-40 0-67-27t-27-67M56-718q-7-39 15.5-70.5T133-827l431-76q39-7 71 15t39 61l14 85H374q-65 0-110 45t-45 110v379q-33-3-56.5-24T133-287zm763 413H702q-20 0-33.5 13.5T655-258v116z" />
  </Svg>
);
