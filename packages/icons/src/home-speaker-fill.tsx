import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHomeSpeakerFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m218-484 32-243q2-16 11.5-28t23.5-19l334-133q27-10 51 4.5t27 43.5l47 375zM377-83q-84 0-138.5-63T194-292l13-97h549l12 100q10 82-44.5 144T586-83z" />
  </Svg>
);
