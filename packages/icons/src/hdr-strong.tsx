import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHdrStrong = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M181.5-311q-69.5 0-117-46.944T17-475q0-70 47.5-117.5t117-47.5q70.5 0 117.5 47.5t47 118q0 69.5-47 116.5t-117.5 47m-.5-83q38.413 0 60.206-21.294Q263-436.587 263-475q0-38.412-21.794-59.706Q219.413-556 181-556q-38.413 0-59.706 21.294Q100-513.412 100-475q0 38.413 21.294 59.706Q142.587-394 181-394m507.882 167Q584-227 510-301.309t-74-178.75q0-104.441 74.309-179.191T689.059-734q104.858 0 179.399 74.515Q943-584.971 943-480.235q0 104.735-74.618 178.985Q793.765-227 688.882-227" />
  </Svg>
);
