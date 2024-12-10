import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDataLossPreventionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M430-580q32 0 54-22t22-54q0-32-22-53.5T430-731q-32 0-54 21.5T354-656q0 32 22 54t54 22m0 171q42 0 78.5-17t66.5-52q-36-21-72-31.5T430-520q-37 0-73 10.5T285-478q31 35 67.5 52t77.5 17m0 177q-141 0-239.5-98.5T92-570q0-141 98.5-240T430-909q141 0 240 99t99 240q0 54-19.5 107.5T700-366l179 179q15 15 15 33.5T879-121q-14 15-33 15t-33-15L633-300q-42 31-95 49.5T430-232" />
  </Svg>
);
