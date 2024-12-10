import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlignCenter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M102-433q-19.75 0-33.375-13.675Q55-460.351 55-480.175 55-500 68.625-513.5 82.25-527 102-527h756q19.75 0 33.875 13.675Q906-499.649 906-479.825 906-460 891.875-446.5 877.75-433 858-433zm218-154q-19.75 0-33.375-13.625T273-635v-40q0-19.75 13.625-33.375T320-722h320q19.75 0 33.375 13.625T687-675v40q0 20.75-13.625 34.375T640-587zm0 349q-19.75 0-33.375-13.625T273-286v-40q0-19.75 13.625-33.375T320-373h320q19.75 0 33.375 13.625T687-326v40q0 20.75-13.625 34.375T640-238z" />
  </Svg>
);
