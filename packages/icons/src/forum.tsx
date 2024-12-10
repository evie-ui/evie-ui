import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgForum = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M285-201q-23 0-40.5-18.613Q227-238.225 227-260v-116h521v-360h118q21.775 0 39.388 18.612Q923-698.775 923-676v527q0 31.625-29 43.812Q865-93 842-116l-85-85zm-76-235-91 91q-23 23-52 11.312Q37-345.375 37-377v-490q0-21.775 17.612-40.388Q72.225-926 95-926h535q22.775 0 40.388 18.112Q688-889.775 688-867v372q0 22.775-17.612 40.888Q652.775-436 630-436zm385-94v-301H132v301zm-462 0v-301z" />
  </Svg>
);
