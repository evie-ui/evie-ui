import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgViewComfyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M102-510q-19.75 0-33.375-13.625T55-557v-221q0-19.75 13.625-33.875T102-826h756q19.75 0 33.875 14.125T906-778v221q0 19.75-14.125 33.375T858-510zm331 375q-20.75 0-34.375-13.625T385-182v-221q0-19.75 13.625-33.375T433-450h425q19.75 0 33.875 13.625T906-403v221q0 19.75-14.125 33.375T858-135zm-331 0q-19.75 0-33.375-13.625T55-182v-221q0-19.75 13.625-33.375T102-450h176q19.75 0 33.375 13.625T325-403v221q0 19.75-13.625 33.375T278-135z" />
  </Svg>
);
