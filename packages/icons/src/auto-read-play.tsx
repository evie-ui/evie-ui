import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAutoReadPlay = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m444-437 155.329-103.239Q609-546.805 609-559.683T599-580L444-684q-12-8-24.5-1.2T407-664v209q0 14.309 12.5 20.654Q432-428 444-437M215-215l-79 79q-23 23-52 10.969T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215zm-26-94h622v-502H149v548zm-40 0v-502z" />
  </Svg>
);
