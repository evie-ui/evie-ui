import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWineBarFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-174v-166q-112-18-172.5-92.703Q200-507.405 200-600v-233q0-19.75 13.625-33.875T247-881h466q19.75 0 33.875 14.125T761-833v233q0 92.595-61 167.297Q639-358 527-340v166h106q19.75 0 33.875 13.675Q681-146.649 681-126.825 681-107 666.875-93.5 652.75-80 633-80H327q-19.75 0-33.375-13.675Q280-107.351 280-127.175 280-147 293.625-160.5 307.25-174 327-174zM294-647h372v-139H294z" />
  </Svg>
);
