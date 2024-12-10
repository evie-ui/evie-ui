import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNetworkCheck = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M40-562q-17-16-16-39.5T43-640q89-76 202-118t235-42q24 0 52.5 1.5T589-793l-54 108q-11-1-25-1.5t-30-.5q-100 0-191 34t-168 95q-19 14-41.5 13.5T40-562m123 118q-18-16-17-39t19-36q64-48 148.5-73T500-611l-59 118q-51-6-103.5 10.5T245-436q-21 12-43.5 10.5T163-444m275 289q-28-12-42-46t2-67l237-482q4-9 13-14.5t21-2.5q12 4 17.5 13t2.5 19L555-204q-9 37-48 48.5t-69 .5m286-476 27-113q49 20 89.5 46.5T918-640q18 16 19 39t-16 39q-17 17-40.5 18T837-559q-28-22-57.5-41T724-631m112 228q-15 15-38 15.5T759-403q-12-13-37-29.5T681-455l26-112q33 10 69.5 36.5T836-481q16 17 16 39.5T836-403" />
  </Svg>
);
