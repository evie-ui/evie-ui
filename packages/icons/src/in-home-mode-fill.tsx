import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInHomeModeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M594-56 426-224l66-66 102 102 215-215 66 66zm-445-87v-441H43l437-358 437 358H811v94L594-273 492-375 341-224l82 81z" />
  </Svg>
);
