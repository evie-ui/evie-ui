import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgProcessChartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M87-225q-18-9-24-27t3-36l218-427q8-18 26-23t36 3q18 9 23.5 27t-2.5 35L150-245q-9 18-27 23t-36-3m264 0q-18-9-24-27t3-36l218-427q8-18 26-23t36 3q18 9 23.5 27t-2.5 35L414-245q-9 18-27 23t-36-3m264 0q-18-9-24-27t3-36l218-427q8-18 26-23t36 3q18 9 23.5 27t-2.5 35L678-245q-9 18-27 23t-36-3" />
  </Svg>
);
