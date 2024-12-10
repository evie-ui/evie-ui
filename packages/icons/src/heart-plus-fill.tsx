import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHeartPlusFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M683-263v-130H553v-94h130v-130h94v130h130v94H777v130zM439-86l-92-83q-97-87-161-151.5t-102.5-117Q45-490 29.5-535.554T14-631q0-105.589 70.423-175.794Q154.845-877 259-877q51.932 0 97.966 19Q403-839 439-803q37-36 83.034-55 46.035-19 96.966-19 98.9 0 167.95 63Q856-751 865-657q-30-20-63.387-30.5T732-699q-107.65 0-183.325 75.453Q473-548.095 473-440q0 66 32 123t88 92q-17 17-37.5 35.5T515-153z" />
  </Svg>
);
