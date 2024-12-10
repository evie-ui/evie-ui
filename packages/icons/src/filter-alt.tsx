import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFilterAlt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M440-135q-27 0-46-19t-19-46v-231L142-730q-24-30-7.5-63t53.5-33h584q37 0 53.5 33t-6.5 63L586-431v239q0 25-16.5 41T528-135zm40-316 221-280H260zm0 0" />
  </Svg>
);
