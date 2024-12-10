import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSnowmobileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M152-247h172q27 0 46-20t19-48l-95-30-146 78q-3 1-4.5 4t-1.5 6q0 4 3 7t7 3m802 7q0 9-3 17t-9 15q-18 24-43 39.5T844-153H644q-20 0-33.5-13.5T597-200q0-20 13.5-33.5T644-247h59l-66-66H490q0 68-50.5 114T324-153H84q-42 0-64.5-27T-3-240q0-22 11-42.5T43-316l124-69-92-26q-32-9-45.5-39t1.5-61l28-52q9-20 28.5-31t41.5-9l313 35 122-91-28-25h-58q-18 0-29.5-12T437-726q0-18 12-29.5t30-11.5h51q18 0 35 6.5t30 18.5l260 241q21 19 28.5 37t7.5 34q0 37-28.5 67T794-320l-41 2 74 71h7q10 0 18.5-4.5T866-263q6-11 17.5-17.5T908-287q20 0 33 13.5t13 33.5" />
  </Svg>
);