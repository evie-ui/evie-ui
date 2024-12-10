import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLiveTvFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m426-379 181-117q17-11 17-29.5T607-555L426-672q-17-11-35.5.022Q372-660.957 372-640v230q0 20.545 18.484 31.773Q408.968-367 426-379M149-175q-39.05 0-66.525-27.475Q55-229.95 55-269v-502q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v502q0 39.05-27.769 66.525Q850.463-175 811-175H644v33q0 20-14.062 33.5Q615.875-95 596-95H364q-20 0-33.5-13.5T317-142v-33z" />
  </Svg>
);
