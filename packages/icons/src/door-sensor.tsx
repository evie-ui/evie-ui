import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDoorSensor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M353-360v-407 574zm-95 47h95v120h254v-574H353v360h-95v-360q0-40.213 27.394-67.606Q312.788-862 353-862h254q40.213 0 67.606 27.394Q702-807.213 702-767v574q0 40.212-27.394 67.606Q647.213-98 607-98H353q-40.212 0-67.606-27.394Q258-152.788 258-193zm222.5-240q19.5 0 33-14t13.5-33.5q0-19.5-13.625-33T480-647q-19 0-33 13.625T433-600q0 19 14 33t33.5 14M819-593q-19 0-33-14t-14-33v-160q0-19.75 14-33.375T819.5-847q19.5 0 33 13.625T866-800v160q0 19-13.625 33T819-593M190-313q-19 0-33-14t-14-33.5q0-19.5 14-33t33-13.5h290q19.75 0 33.375 13.625T527-360q0 19-13.625 33T480-313z" />
  </Svg>
);
