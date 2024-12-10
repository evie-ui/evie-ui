import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSendFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M163-165q-24 10-45-3.5T97-207v-177l336-96-336-98v-175q0-25 21-38.5t45-4.5l644 272q29 12 29 44t-29 44z" />
  </Svg>
);
