import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEditAttributesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M279-255q-94.11 0-159.555-65.422Q54-385.845 54-479.696q0-93.852 65.445-160.078T279-706h400q93.79 0 159.895 66.148Q905-573.703 905-479.852 905-386 838.895-320.5T679-255zm77-169 86-86q7-6.909 7-17.818 0-10.909-7-19.182-8.273-7-18.818-7-10.546 0-17.182 7l-83.612 83L295-491q-7.636-8-17.818-8Q267-499 259-491.071q-8 6.928-8 17.863 0 10.935 8 19.208l29 30q14.727 14 34.364 14Q342-410 356-424" />
  </Svg>
);
