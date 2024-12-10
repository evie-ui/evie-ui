import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwapCalls = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M151-345v-293q0-78 54-132.5T337-825q78 0 132 54.5T523-638v277q0 41 29 69.5t70 28.5q41 0 70.5-28.5T722-361v-294l-36 35q-13 14-31.5 14T623-619q-13-13-12-32.5t13-31.5l108-109q6-7 15-11t18-4q10 0 18.5 4t15.5 11l109 109q13 13 13 32.5T908-619q-13 13-31.5 12.5T845-621l-36-34v294q0 78-54.5 131.5T622-176q-78 0-132-53.5T436-361v-277q0-41-29-70.5T337-738q-41 0-70 29.5T238-638v293l36-36q13-13 32-13t32 13q13 14 12 33.5T337-316L229-208q-7 7-16 11t-18 4q-10 0-18.5-4T161-208L52-317q-13-13-13-32t14-32q13-13 31.5-13t32.5 13z" />
  </Svg>
);
