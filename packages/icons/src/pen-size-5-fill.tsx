import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPenSize5Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M230-230.118q-38-38.117-38-90Q192-372 230-410l320-320q38.148-38 90.074-38Q692-768 730-729.882q38 38.117 38 90Q768-588 730-550L410-230q-38.148 38-90.074 38Q268-192 230-230.118" />
  </Svg>
);
