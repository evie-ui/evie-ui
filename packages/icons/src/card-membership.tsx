import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCardMembership = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-441v92h662v-92zm0-465h662q40.213 0 67.606 27.394Q906-851.213 906-811v462q0 39.8-27.394 66.9Q851.213-255 811-255H646v133q0 27.5-23 41.25T577-80l-75-38q-11-4-22-4t-21 4l-76 38q-23 13-45.5-.75T315-122v-133H149q-39.8 0-66.9-27.1Q55-309.2 55-349v-462q0-40.213 27.1-67.606Q109.2-906 149-906m0 334h662v-239H149zm0 223v-462z" />
  </Svg>
);
