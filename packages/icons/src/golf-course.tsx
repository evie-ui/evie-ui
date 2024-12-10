import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGolfCourse = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M820-117q-23 0-39-15.792-16-15.791-16-39.208 0-23.417 15.88-39.208Q796.76-227 819.588-227q23.829 0 39.62 15.674Q875-195.652 875-172.118q0 23.535-15.708 39.326Q843.583-117 820-117M396-57q-106.667 0-182.833-25.65Q137-108.3 137-148.643q0-26.357 44.4-50.559Q225.8-223.404 283-237v61q0 15.3 10.289 25.65 10.29 10.35 25.5 10.35Q334-140 344.5-150.35 355-160.7 355-176v-659q0-26 22-40.5t46-2.5l202 99q26 13 26.5 42T626-695l-189 98v354.346Q535-234 595-208.5q60 25.5 60 59.5 0 36-71 64T396-57" />
  </Svg>
);
