import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSend = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M807-436 163-165q-24 10-45-3.5T97-207v-546q0-25 21-38.5t45-4.5l644 272q29 12 29 44t-29 44M180-264l516-216-516-219v146l253 73-253 71zm0 0v-435z" />
  </Svg>
);
