import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDraftsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m529-914 328 196q28 16 38.5 39.5T906-628v446q0 39-28 66.5T811-88H149q-39 0-66.5-27.5T55-182v-446q0-27 10-50.5t38-39.5l328-196q23-13 49-13t49 13m-49 458 320-188-320-193-320 193z" />
  </Svg>
);
