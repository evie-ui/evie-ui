import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSyringeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M130-510q-12-13-12-31.5t12-30.5l121-120-49-50-26 28q-14 12-32 12t-30-12q-13-12-13-30t13-32l115-115q12-13 30-13t32 13q11 13 11 31t-11 30l-28 29 49 48 121-122q13-12 31-12t31 12q12 13 12 31t-12 31l-25 25 72 70-114 112q-13 14-13 32t13 29q13 13 31 13t31-13l112-111 62 61-113 112q-13 12-13 30.5t13 31.5q13 12 30.5 12.5T612-422l113-113 66 67q28 27 28 66.5T791-335l-30 29 143 145q11 11 5.5 26T888-120h-35q-14 0-27-5.5T803-141L700-244l-30 30q-28 27-66.5 27T536-214L216-535l-24 25q-12 13-30.5 13T130-510" />
  </Svg>
);
