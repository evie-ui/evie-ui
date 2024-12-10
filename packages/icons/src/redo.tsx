import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRedo = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M646-567H375q-61 0-103.5 43.5T229-418q0 62 42.5 105.5T375-269h270q20 0 33.5 13.5T692-222q0 20-13.5 33.5T645-175H376q-100 0-170.5-71T135-418q0-100 70.5-171.5T376-661h270l-66-66q-14-14-14-32.5t14-33.5q14-14 33-14t33 14l146 145q7 7 11 16t4 18q0 9-4 18t-11 16L646-436q-14 15-33 15t-33-15q-14-14-14-32.5t14-33.5z" />
  </Svg>
);
