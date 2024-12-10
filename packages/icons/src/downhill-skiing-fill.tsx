import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDownhillSkiingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M743-23q-27 0-53.5-4T640-39L87-239q-10-4-15-14t-1-20q4-10 13.5-15t20.5-1l265 96 65-158-152-157q-31-32-28-74.5t41-66.5l153-90q17-9 36-11.5t35 1.5q16 3 29 13.5t18 26.5l15 48q15 51 47 80t77 42l14-43q4-9 13.5-14t18.5-2q10 3 14.5 12.5T768-566l-39 118q-75-16-121.5-46.5T529-584l-116 65 102 121q9 10 11.5 24t-3.5 26l-75 184 121 43 94-282q11 4 23 7t24 5l-93 288 41 15q18 7 39.5 10.5T743-74q23 0 46-3.5T834-89q11-3 20.5.5T867-75q4 11-1.5 21T849-41q-27 9-53.5 13.5T743-23m-50-691q-35 0-59.5-25T609-798q0-35 24.5-60t59.5-25q34 0 59 25t25 60q0 34-25 59t-59 25" />
  </Svg>
);
