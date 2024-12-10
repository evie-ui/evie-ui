import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPersonalInjuryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-563q-73 0-124-51t-51-124.5q0-73.5 51-124T480-913q73 0 124.5 50.5t51.5 124q0 73.5-51.5 124.5T480-563m-79 434q-13.867 0-23.933-10.093-10.067-10.093-10.067-24T377.067-187q10.066-10 23.933-10h69l-34 68zM135-46v-258q0-41.385 22-75.692Q179-414 217-431q62-28 128.5-45t134.428-17q33.072 0 65.572 4t64.5 13l-96 196H401q-48.491 0-82.745 34.359-34.255 34.359-34.255 83T318.255-80Q352.509-46 401-46zm543 0v-412q16 7 32.5 13t31.5 14q38 16 61 51t23 76v164q0 40.05-27.269 67.025Q771.463-46 731-46z" />
  </Svg>
);
