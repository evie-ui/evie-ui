import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLightOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-34q-37 0-62.5-28T390-133h180q-2 43-27.5 71T480-34m214-345L241-833q41-48 104-79t134.5-31q132.875 0 229.688 96.5Q806-750 806-618q0 72.608-30.5 134.118Q745-422.373 694-379m-161 39H316q-74-45-117.5-118.5T155-617.594Q155-644 158.5-666t8.5-39.286L58-813q-11-11-11-25.5T58-864q11-11 25.5-11t25.5 11l723 723q10 10 10.5 24.5t-10.5 25Q821-81 806.6-81q-14.4 0-24.6-11zM347-201q-16 0-26-10.395-10-10.394-10-25.5Q311-252 321.212-262.5 331.425-273 347-273h264q15.15 0 25.075 10.5Q646-252 646-236.895q0 15.106-9.925 25.5Q626.15-201 611-201z" />
  </Svg>
);
