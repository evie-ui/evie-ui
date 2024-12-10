import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgProcessChart = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M86-225q-18-9-24-27t2-36l218-427q9-18 27-23t36 3q17 9 23 27t-3 35L148-245q-9 18-27 23t-35-3m264 0q-18-9-24-27t2-36l218-427q9-18 27-23t36 3q17 9 23 27t-3 35L412-245q-9 18-27 23t-35-3m264 0q-18-9-24-27t2-36l218-427q9-18 27-23t36 3q17 9 23 27t-3 35L676-245q-9 18-27 23t-35-3" />
  </Svg>
);
