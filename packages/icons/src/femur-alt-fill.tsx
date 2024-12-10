import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFemurAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M520-437q17 0 28.5-11.5T560-477q0-3-9-24 13-2 23-11.5t10-23.5q0-17-11.5-28.5T544-576q-13 0-23 8t-13 20l-139-65q1-3 5-20 0-17-11.5-28.5T335-673q-17 0-28.5 11.5T295-633q0 3 8 20-15 1-26.5 12T265-574q0 16 12 27.5t28 11.5q14 0 24-8.5t13-19.5l145 66q-1 1-7 20 0 17 12 28.5t28 11.5m-414-50 265-371 257 118q70 32 111 96t41 141v423l-406-1q-15-42-22-84.5t-9.5-80.5q-2.5-38-.5-71.5t4-57.5h-.5.5q-23-6-52-14.5t-60-22q-31-13.5-64-32T106-487" />
  </Svg>
);
