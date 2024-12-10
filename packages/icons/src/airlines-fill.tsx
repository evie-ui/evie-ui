import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAirlinesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m78-171 408-612q12-19 33.318-31 21.318-12 45.682-12h228q44.247 0 73.124 33.5Q895-759 887-715l-99 542q-3 17-16.556 27.5Q757.889-135 741-135H99q-15.391 0-22.196-12Q70-159 78-171m517.077-254q32.053 0 53.988-22.077Q671-469.155 671-499.577 671-530 649.138-553q-21.861-23-54.42-23-33.138 0-53.928 22.894-20.79 22.895-20.79 53.5Q520-469 541.012-447q21.013 22 54.065 22" />
  </Svg>
);
