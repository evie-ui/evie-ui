import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgVisibilityOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M807-55 653-207q-42 17-85.5 23.5T480-177q-140 0-256-77T40-455q-6-10-8-21.5T30-500q0-12 2-23.5t8-21.5q24-43 52.5-83.5T158-703L35-824l50-52 769 769zM480-330q11 0 22-2t22-7L317-544q-4 11-5.5 22t-1.5 22q0 71 49.5 120.5T480-330m302 48L633-432q11-14 14-32t3-36q0-71-49.5-120.5T480-670q-18 0-35.5 3.5T412-654L283-783q48-22 99-31t103-9q140 0 255 77.5T921-543q5 11 7.5 21t2.5 22q0 12-2.5 22.5T921-456q-26 50-60.5 94.5T782-282M556-509l-73-73q14-8 31-7t30 12q13 14 16.5 32.5T556-509" />
  </Svg>
);
