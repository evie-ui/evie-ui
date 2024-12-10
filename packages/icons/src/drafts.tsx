import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDrafts = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m529-914 328 196q28 16 38.5 39.5T906-628v446q0 39.05-27.769 66.525Q850.463-88 811-88H149q-39.05 0-66.525-27.475Q55-142.95 55-182v-446q0-27 10-50.5t38-39.5l328-196q23.635-13 49.317-13Q506-927 529-914m-49 458 320-188-320-193-320 193zm-48 51L149-571v389h662v-389L528-405q-23.032 13-48.016 13Q455-392 432-405m96 223h283-662z" />
  </Svg>
);
