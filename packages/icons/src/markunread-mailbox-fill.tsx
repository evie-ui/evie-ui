import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMarkunreadMailboxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-392q0-39.463 27.475-67.231Q109.95-636 149-636h91v-222q0-19.875 13.5-33.938Q267-906 287-906h217q20 0 33.5 14.062Q551-877.875 551-858v80q0 20-13.5 33.5T504-731H300v284.172q0 12.828 8.5 21.328T330-417q13 0 21.5-8.5t8.5-21.265V-636h451q39.463 0 67.231 27.769Q906-580.463 906-541v392q0 39.05-27.769 66.525Q850.463-55 811-55z" />
  </Svg>
);