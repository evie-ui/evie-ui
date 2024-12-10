import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVideoFileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39 0-66.5-27.5T135-149v-662q0-39 27.5-67t66.5-28h323q19 0 37 8t31 21l177 177q13 13 21 31t8 37v483q0 39-28 66.5T731-55zm313-617q0 20 13.5 33.5T589-625h142L542-811zM352-240h175q14 0 24.5-10.5T562-275v-55l45 26q12 7 23.5.5T642-324v-72q0-14-11.5-20.5t-23.5.5l-45 26v-55q0-14-10.5-24.5T527-480H352q-14 0-24.5 10.5T317-445v170q0 14 10.5 24.5T352-240" />
  </Svg>
);
