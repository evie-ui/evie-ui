import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSpeakerNotesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M281-399q17 0 28.5-11.5T321-439q0-17-11.5-28.5T281-479q-17 0-28.5 11.5T241-439q0 17 11.5 28.5T281-399m0-120q17 0 28.5-11.5T321-559q0-17-11.5-28.5T281-599q-17 0-28.5 11.5T241-559q0 17 11.5 28.5T281-519m0-120q17 0 28.5-11.5T321-679q0-17-11.5-28.5T281-719q-17 0-28.5 11.5T241-679q0 17 11.5 28.5T281-639m149 230h140q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T570-469H430q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T430-409m0-120h261q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T691-589H430q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T430-529m0-120h261q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T691-709H430q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T430-649M215-215l-79 79q-23 23-52 11.156T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);
