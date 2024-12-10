import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgResponsiveLayoutFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M692-95q-19.75 0-33.375-13.625T645-142v-414q0-39.75-27.625-67.375T550-651H414q-19.75 0-33.375-13.625T367-698v-132q0-19.75 13.625-33.375T414-877h410q19.75 0 33.375 13.625T871-830v688q0 19.75-13.625 33.375T824-95zm-278 0q-19.75 0-33.375-13.625T367-142v-367q0-19.75 13.625-33.375T414-556h89q19.75 0 33.375 13.625T550-509v367q0 19.75-13.625 33.375T503-95zm-277 0q-20.75 0-34.375-13.625T89-142v-367q0-19.75 13.625-33.375T137-556h88q19.75 0 33.875 13.625T273-509v367q0 19.75-14.125 33.375T225-95z" />
  </Svg>
);