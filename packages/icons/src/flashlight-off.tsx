import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlashlightOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M791-83 665-210v87q-9 29.75-34.275 48.875T574-55H413q-40.212 0-67.606-27.1Q318-109.2 318-149v-407L61-812q-11-11-10.5-24.622T62-862q11-11 25.5-11t25.5 11l729 729q11 11 11 24.393t-11 25Q831-72 816.5-72T791-83m-378-66h161v-152L413-462zm255-259-94-94v-29l90-131v-33H383l-60-60h341v-56H323v56l-86-86q7-27 30.5-46t55.5-19h341q38.75 0 66.375 27.394Q758-851.213 758-811v144q0 14.454-3.692 27.704Q750.615-626.046 742-614l-74 108zm-174 27" />
  </Svg>
);