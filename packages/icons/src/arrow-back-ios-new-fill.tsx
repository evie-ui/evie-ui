import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowBackIosNewFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m394-480 303 303q15 16 15.5 40T697-96q-17 16-41 16t-40-16L298-414q-14-14-20.5-31t-6.5-35q0-18 6.5-35t20.5-31l319-318q16-17 39-17t41 17q15 17 15.5 40.5T697-783z" />
  </Svg>
);
