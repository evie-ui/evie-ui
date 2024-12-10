import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTrip = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-95q-39.8 0-66.9-27.1Q55-149.2 55-189v-450q0-40.213 27.1-67.606Q109.2-734 149-734h148v-100q0-38.75 27.625-66.375T391-928h178q38.75 0 66.375 27.625T663-834v100h148q40.213 0 67.606 27.394Q906-679.213 906-639v450q0 39.8-27.394 66.9Q851.213-95 811-95zm242-639h178v-100H391zm-167 95h-75v450h75zm453 450v-450H284v450zm60-450v450h74v-450zM480-423" />
  </Svg>
);
