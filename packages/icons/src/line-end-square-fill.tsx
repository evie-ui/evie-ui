import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineEndSquareFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M475-248q-19.75 0-33.375-13.625T428-295v-138H110q-19.75 0-33.375-13.675Q63-460.351 63-480.175 63-500 76.625-513.5 90.25-527 110-527h318v-138q0-19.75 13.625-33.375T475-712h370q19.75 0 33.375 13.625T892-665v370q0 19.75-13.625 33.375T845-248z" />
  </Svg>
);
