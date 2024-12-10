import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsVolleyball = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M800-573q-27-96-106-161.5T509-809v66zM302-415l147-88v-306q-39 5-76 16.5T302-760zm-125 74 65-38v-334q-45 46-69 107.5T149-479q0 38 7 71.5t21 66.5m150 156 305-175-153-91-273 162q24 32 54.5 59t66.5 45m152 36q84 0 155-36.5T753-288l-63-37-289 167q19 5 39 7t39 2m302-193q17-36 24-74.5t6-80.5L509-674v173zM479-55q-88 0-165.5-33t-135-91Q121-237 88-314.5T55-480q0-88 33-165.5T178.5-781q57.5-58 135-91.5T479-906q89 0 166.5 33.5T781-781q58 58 91.5 135.5T906-480q0 88-33.5 165.5T781-179q-58 58-135.5 91T479-55" />
  </Svg>
);
