import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCutFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M478-399 370-291q9 16 11 30t2 31q0 67.175-44.376 111.588Q294.248-74 227.124-74T116-118.376q-44-44.376-44-111.5T115.912-341.5Q159.825-386 227-386q16.333 0 32.167 4.5Q275-377 292-369l107-107-109-109q-16 6-31.5 8.5T227-574q-67.175 0-111.088-44.376Q72-662.752 72-729.876T115.876-841.5q43.876-44.5 111-44.5T338.5-841.588Q383-797.175 383-730q0 17-1.5 32t-8.5 29l467 467q27 27 12.603 63t-53.834 36q-11.618 0-22.616-4.559Q765.154-112.118 758-120zm135-128-83-82 228-227q7.154-7.882 18.153-12.441Q787.151-853 798.769-853q39.395 0 53.313 36T839-754zM227.212-646Q262-646 287-670.712q25-24.713 25-59.5Q312-765 287.08-789.5q-24.921-24.5-60-24.5-35.08 0-59.58 24.712-24.5 24.713-24.5 59.5Q143-695 167.712-670.5q24.713 24.5 59.5 24.5M480-440q15 0 25.5-10.5T516-476q0-15-10.5-25.5T480-512q-15 0-25.5 10.5T444-476q0 15 10.5 25.5T480-440M227.212-146Q262-146 287-170.712q25-24.713 25-59.5Q312-265 287.08-289.5q-24.921-24.5-60-24.5-35.08 0-59.58 24.712-24.5 24.713-24.5 59.5Q143-195 167.712-170.5q24.713 24.5 59.5 24.5" />
  </Svg>
);
