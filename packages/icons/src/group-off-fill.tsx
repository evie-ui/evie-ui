import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGroupOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M820-51 649-222h57v33q0 28.188-19.406 47.594Q667.188-122 639-122H109q-39 0-66.5-27.5T15-216v-27q0-42 21.5-76T97-371q75-32 136.51-47 61.511-15 126.49-15 23.714 0 44.5 3t42.5 7l-75-75q-6 2-13 2.5t-14 .5q-62-5-101.5-44T199-640q0-7 .5-14.53.5-7.53 2.5-13.57L47-823q-10-10-10.5-25T47-874q10.579-11 25.5-11T98-874l773 773q10 11 10.5 25T871-51q-10.579 11-25.5 11T820-51M662-430q61 9 115 23t89 32q37 18 58 54.5t21 82.5v78h-33L767-306q-13-38-39.5-67.5T662-430m-107-87q20-27 29.5-63t9.5-77.089q0-47.906-12.655-85.39Q568.69-779.964 543-810.13q12-3.87 25.241-6.37t25.981-2.5Q666-819 711.5-773.456q45.5 45.545 45.5 116.5Q757-581 704-532.5T576-496zm-54-53L274-798q18.072-10 40.087-15.5Q336.101-819 360-819q72.35 0 117.675 44.925Q523-729.151 523-657.363q0 24.363-5.5 46.863T501-570" />
  </Svg>
);
