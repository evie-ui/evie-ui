import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHallwayFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-34q-39 0-66.5-28T95-129v-581q0-39 27.5-67t66.5-28h134l124-124q14-14 34-14t34 14l125 124h131q39 0 67 28t28 67v581q0 39-28 67t-67 28zm258-234-73-102q-8-10-20-10t-19 10l-85 114q-9 13-2.5 25.5T269-218h425q15 0 21-12.5t-2-25.5L598-415q-7-10-19-10t-19 9zm-39-537h147l-74-73z" />
  </Svg>
);
