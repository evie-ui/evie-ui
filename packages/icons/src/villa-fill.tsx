import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVillaFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M359-109v-288q0-38.75 27.625-66.375T453-491h256q0-30 20.429-51t50.5-21Q810-563 830.5-541.85 851-520.7 851-491v382H646v-151q0-17.425-11.777-29.212Q622.445-301 605.035-301q-17.41 0-29.223 11.788Q564-277.425 564-260v151zm-250 0v-482q0-29.212 16.667-53.166Q142.333-668.12 169-679l412-158q24-9 44.5 5.4T646-792v241H441q-59.5 0-100.75 41.5T299-410v301z" />
  </Svg>
);
