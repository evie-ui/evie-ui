import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMobileOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M849-37 31-868q-10-11-10.5-24.393t10.5-25Q42-929 56.5-929T82-917L899-87q11 11 10.5 25T898-37q-11 11-25 11t-24-11M177-770l94 95v474h426l85 86v5q1 39.463-26.906 66.231Q727.187-17 688-17H271q-38.75 0-66.375-27.625T177-111zm94 629v30h418v-30zm512-708v558l-94-95v-373H322L199-881v-2q3-27 25.5-43.5T275-943h414q38.75 0 66.375 27.475T783-849m-495 30h401v-30H288zm-17 678v30zm17-678v-30z" />
  </Svg>
);
