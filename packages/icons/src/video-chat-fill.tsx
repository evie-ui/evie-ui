import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVideoChatFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M313-409h247q14 0 23.5-10t9.5-24v-93l67 66q6 7 13 4t7-12v-170q0-8-7-11t-13 3l-67 67v-94q0-14-9.5-23.5T560-716H313q-14 0-23.5 9.5T280-683v240q0 14 9.5 24t23.5 10m-98 194-79 79q-23 23-52 11.5T55-168v-643q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-215z" />
  </Svg>
);