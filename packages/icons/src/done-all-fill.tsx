import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDoneAllFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M261-228 80-409q-14-14-14-33.5T80-476q14-14 33.5-14t33.5 14l147 148 67 67-32 33q-15 15-34.5 14.5T261-228m169-24L248-434q-14-14-13.5-33.5T250-502q14-13 33.5-13t32.5 13l148 149 350-349q13-14 32.5-14.5T881-703q14 14 14 34t-14 34L498-252q-14 14-34 14t-34-14m34-161-66-67 224-224q14-14 33.5-14t33.5 14q13 14 13 33.5T689-638z" />
  </Svg>
);