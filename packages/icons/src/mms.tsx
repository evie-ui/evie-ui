import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMms = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M291-383h403q14 0 21-13t-3-25L599-569q-8.308-10-19.154-9.5T561-569L454-427l-73-89q-8.308-10-19.154-10T343-516l-71 95q-9 12-2.25 25T291-383m-76 168-79 79q-23 23-52 10.969T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215zm-26-94h622v-502H149v548zm-40 0v-502z" />
  </Svg>
);
