import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDataUsage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-55q-87.886 0-164.943-33Q239-121 181-179q-58-58-91.5-135.057Q56-391.114 56-479q0-167.76 114-289.38T452-903v137q-111 9-185.5 91.5T192-478.668q0 119.847 84.446 203.757Q360.892-191 480.791-191 551-191 613-223t105-89l118 70q-61 90-154.277 138.5Q588.446-55 481-55m384-241-118-68q11-29 17-58.513 6-29.513 6-57.487 0-113-73.5-195.5T512-767v-137q168 11 281.5 132.62T907-484q0 47.742-11 94.871T865-296" />
  </Svg>
);
