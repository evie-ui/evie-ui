import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTokenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M364-592q24-23 53-36t63-13q34 0 63 13t53 36l223-131-293-159q-22-12-46-12t-45 12L141-723zm75 515v-248q-53-14-86.5-56T319-480q0-8 .5-17.5T324-519L97-654v327q0 26 12.5 47t35.5 34zm41-324q33 0 56-23.5t23-55.5q0-33-23-56t-56-23q-32 0-55.5 23T401-480q0 32 23.5 55.5T480-401m41 324 294-169q23-13 35.5-34t12.5-47v-327L637-519q3 12 3.5 21.5t.5 17.5q0 57-33.5 99T521-324z" />
  </Svg>
);
