import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDarkModeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-109q-159 0-265.5-106T109-480q0-123 63-216.5T359-832q29-9 49.5-7t33.5 13q13 11 17.5 29t-.5 45q1 20-.5 36.5T457-684q0 95 67 162t163 67q16 0 32.5.5t34.5.5q28-4 46.5.5T829-436q9 13 10 33t-8 49q-42 109-132 177t-218 68" />
  </Svg>
);
