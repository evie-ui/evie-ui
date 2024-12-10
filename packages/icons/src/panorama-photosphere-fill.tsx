import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPanoramaPhotosphereFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479-57q-114 0-208.5-61T125-280q-10-4-25-10.5T73-303q-25-13-40.5-38.5T17-396v-168q0-29 15.5-54.5T73-657q12-6 27-12.5t25-10.5q51-101 145.5-162T479-903q114 0 208.5 61T834-680q9 4 24.5 10.5T886-657q27 14 42 39t15 54v168q0 29-15 54t-42 39q-12 6-27.5 12.5T834-280q-52 101-146.5 162T479-57m2-72q71 0 136-32t109-92q-56 16-121.5 26T481-217q-58 0-124.5-10T233-253q48 61 114 92.5T481-129m0-703q-68 0-134 31.5T233-708q57-16 123.5-26.5T481-745q58 0 123.5 10.5T726-708q-44-60-109-92t-136-32" />
  </Svg>
);
