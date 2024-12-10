import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVerticalSplitFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M119-344q-20 0-33.5-13.5T72-391q0-19 13.5-33t32.5-14h256q20 0 33.5 13.5T421-391q0 19-13.5 33T375-344zm0 178q-20 0-33.5-13.5T72-213q0-19 13.5-33t32.5-14h256q20 0 33.5 13.5T421-213q0 19-13.5 33T375-166zm0-356q-20 0-33.5-13.5T72-569q0-19 13.5-33t32.5-14h256q20 0 33.5 13.5T421-569q0 19-13.5 33T375-522zm0-178q-20 0-33.5-13.5T72-747q0-19 13.5-33.5T118-795h256q20 0 33.5 14t13.5 34q0 19-13.5 33T375-700zm456 534q-20 0-33.5-13.5T528-213v-534q0-20 13.5-34t33.5-14h267q20 0 33.5 14t13.5 34v534q0 20-13.5 33.5T842-166z" />
  </Svg>
);
