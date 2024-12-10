import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDeveloperGuide = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v582q0 39-28 66.5T771-95zm-9-685v600h600v-600H676v215q0 14.391-12 21.196Q652-537 640-544l-39-23q-11-7-23-7t-23 7l-38 23q-13 7-25 .196-12-6.805-12-21.196v-215zm0 600v-600z" />
  </Svg>
);
