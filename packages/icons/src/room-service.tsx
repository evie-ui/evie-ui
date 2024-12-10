import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRoomService = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M102-140q-20 0-33.5-13.5T55-187q0-20 13.5-34t33.5-14h756q20 0 34 14t14 34q0 20-14 33.5T858-140zM85-295v-42q0-158 87.5-258T395-730v-24q0-35 24.5-60t60.5-25q36 0 61 25t25 60v24q134 35 222 135t88 258v42zm99-94h592q-16-121-101-188t-196-67q-111 0-195 67T184-389m296 0" />
  </Svg>
);
