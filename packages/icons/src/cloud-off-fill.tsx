import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCloudOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M248-146q-97 0-164-66T17-375q0-83 52.5-144T201-593q0-9 2.5-25.5T213-645L73-785q-11-11-11-25t12-25q11-10 24.5-10t24.5 10l732 732q11 11 10.5 25T854-53q-11 11-25.5 10.5T804-54l-93-92zm622-37L300-747q36-31 84-47t94-16q115 0 199.5 80T770-536v21q74 8 123.5 58T943-333q0 40-19.5 84T870-183" />
  </Svg>
);
