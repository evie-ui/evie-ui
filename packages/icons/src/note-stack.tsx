import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoteStack = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M279-149v-437q0-40.101 27-68.051Q333-682 372-682h439q40.213 0 67.606 27.394Q906-627.213 906-587v324L697-55H373q-39.8 0-66.9-27.1Q279-109.2 279-149M56-718q-7-39 15.324-70.458Q93.648-819.915 133-827l431-76q39-7 70.907 14.824Q666.814-866.352 674-827l14 85h-86l-14.143-77L141-741l78 442v91q-33-3-56.404-24.051Q139.192-253.102 133-287zm310 123v453h289v-116q0-19.75 13.625-33.375T702-305h117v-290zm226 227" />
  </Svg>
);
