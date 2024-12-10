import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgApi = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-351 351-480l129-129 129 129zm-85-337-99-99 118-117q14-14 31-20.5t35-6.5q18 0 35 6.5t31 20.5l118 117-99 99-85-85zM174-296 56-414q-14-14-20.5-31T29-480q0-18 6.5-35T56-546l118-118 98 99-85 85 85 85zm613 0-99-99 85-85-85-85 99-99 117 118q14 14 20.5 31t6.5 35q0 18-6.5 35T904-414zM414-56 296-174l99-98 85 85 85-85 99 98L546-56q-14 14-31 20.5T480-29q-18 0-35-6.5T414-56" />
  </Svg>
);
