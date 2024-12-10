import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMobileOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M849-37 31-868q-10-11-10.5-24.5T31-917q11-12 25.5-12T82-917L899-87q11 11 10.5 25T898-37q-11 11-25 11t-24-11M177-770l94 95v474h426l85 86v5q1 39-27 66t-67 27H271q-39 0-66.5-27.5T177-111zm606-79v558l-94-95v-373H322L199-881v-2q3-27 25.5-43.5T275-943h414q39 0 66.5 27.5T783-849" />
  </Svg>
);
