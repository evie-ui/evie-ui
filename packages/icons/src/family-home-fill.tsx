import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFamilyHomeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-260q5 0 10.5-2.5T501-269q17-16 42.5-40.5T593-363q24-29 40.5-59t16.5-56q0-39-25.5-64.5T560-568q-23 0-44 11.5T480-529q-15-16-36-27.5T400-568q-39 0-64.5 25.5T310-478q0 26 16.5 56t40.5 59q24 29 49.5 53.5T459-269q5 4 10.5 6.5T480-260M234-109q-39 0-66.5-27.5T140-203v-307l-45 34q-13 11-30.5 9T37-483q-10-13-8-30.5T45-541l378-288q13-9 27-14t29-5q16 0 30 5t27 14l378 289q14 10 16 27.5t-8 30.5q-11 14-27 15.5t-30-8.5l-46-35v307q0 39-27.5 66.5T724-109z" />
  </Svg>
);
