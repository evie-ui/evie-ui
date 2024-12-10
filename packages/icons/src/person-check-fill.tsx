import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPersonCheckFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m724-604 114-114q14-14 33-13.5t33 13.5q14 15 14 34t-14 33L758-503q-15 14-34.5 14T690-503l-70-70q-14-14-13.5-33.5T621-640q14-14 33-14t34 14zM356-494q-78 0-127-49t-49-126q0-77 49-126t127-49q77 0 126 49t49 126q0 77-49 126t-126 49M10-216v-27q0-42 21.5-76T92-371q77-34 138.5-48T356-433q64 0 125 14t137 48q40 18 61.5 51.5T701-243v27q0 39-27.5 66.5T607-122H105q-40 0-67.5-27.5T10-216" />
  </Svg>
);
