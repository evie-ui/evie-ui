import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWbShadeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M820-138 556-402v-48q0-16 15-21.5t26 5.5l287 287q11 11 5 26t-21 15zm-264-48v-153l200 201H603q-20 0-33.5-13.5T556-186m-450 3v-374H91q-15 0-21-15t5-26l192-192q14-14 34-14t34 14l192 192q11 11 5 26t-21 15h-15v374q0 20-13.5 33.5T449-136H153q-20 0-33.5-13.5T106-183m164-219h80v-155h-80z" />
  </Svg>
);
