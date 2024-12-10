import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAudioFileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h323q18.867 0 36.933 8Q607-890 620-877l177 177q13 13 21 31.067 8 18.066 8 36.933v483q0 39.05-27.769 66.525Q770.463-55 731-55zm313-617q0 20 13.5 33.5T589-625h142L542-811zM426.5-186q43.5 0 74.5-30.211T532-289v-214h86q13 0 21.5-8.5T648-533q0-13-8.5-21.5T618-563h-96q-13 0-21.5 8.5t-8.5 21.114V-368q-12-10-29.359-16T427-390q-42 0-70.5 29T328-290.5q0 42.5 28.5 73.5t70 31" />
  </Svg>
);
