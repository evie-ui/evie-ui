import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgVilla = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M109-203v-388q0-29.212 16.667-53.166Q142.333-668.12 169-679l412-159q24-9 44.5 5.4T646-793v302h63q0-29.75 20.796-50.875 20.797-21.125 50-21.125Q809-563 830-541.875T851-491v288q0 38.75-27.625 66.375T757-109H203q-38.75 0-66.375-27.625T109-203m82 12h168v-206q0-38.75 27.625-66.375T453-491h111v-251L191-598.002zm250 0h123v-69q0-17.425 11.777-29.212Q587.555-301 604.965-301q17.41 0 29.223 11.788Q646-277.425 646-260v69h123v-218H441zm164-109" />
  </Svg>
);
