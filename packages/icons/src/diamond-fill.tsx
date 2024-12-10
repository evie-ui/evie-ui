import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDiamondFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M359-625h242l-98-226h-46zm96 493v-443H85zm50 0 370-443H505zm155-493h220l-86-175q-12-24-35-37.5T708-851H560zm-580 0h221l99-226H252q-28 0-51 13.5T167-800z" />
  </Svg>
);
