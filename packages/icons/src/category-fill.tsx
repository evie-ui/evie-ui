import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCategoryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m261-571 180-290q7-11 17.5-16.5T481-883q12 0 22.5 5.5T521-861l181 290q7 13 6.5 25.5T702-522q-5 11-16.1 17.5-11.1 6.5-24.9 6.5H301q-13.914 0-25.1-6.625Q264.714-511.25 260-522q-6-11-6.5-23.5T261-571M727-34q-83.5 0-141.25-57.75T528-233q0-83.5 57.75-141.75T727-433q83.5 0 141.25 58.25T926-233q0 83.5-57.75 141.25T727-34M62-107v-259q0-19.75 13.625-33.875T110-414h260q19.75 0 33.375 14.125T417-366v259q0 20.75-13.625 34.375T370-59H110q-20.75 0-34.375-13.625T62-107" />
  </Svg>
);