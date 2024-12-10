import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAirlineSeatFlatFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M425-389q-20.75 0-34.375-13.625T377-436v-161q0-38.75 27.394-66.375T472-691h262q72 0 123 50.5T908-518v82q0 19.75-14.188 33.375Q879.625-389 860-389zm436 155H99q-19.75 0-33.375-13.675Q52-261.351 52-281.675 52-302 65.625-315.5 79.25-329 99-329h762q19.625 0 33.812 13.675 14.188 13.676 14.188 34Q909-261 894.812-247.5 880.625-234 861-234M193.765-389Q134-389 93-430.235q-41-41.236-41-101Q52-591 93.235-633q41.236-42 101-42Q254-675 295.5-633.059t41.5 102Q337-471 295.265-430q-41.736 41-101.5 41" />
  </Svg>
);
