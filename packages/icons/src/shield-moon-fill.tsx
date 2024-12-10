import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgShieldMoonFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M501-330q35 0 68-14.5t59-42.5q6-7 5.5-11t-9.5-6q-39-8-74-31.5T492-497q-21-36-25-77.5t10-80.5q3-9-1-12t-14-1q-62 14-97.5 62.5T329-500q0 71 50 120.5T501-330M480-60q-8 0-15.5-1.5T450-66q-144-47-229.5-177.5T135-523v-189q0-30 16.5-55t44.5-35l251-94q16-6 33-6t33 6l251 94q28 10 45 35t17 55v189q0 149-86 279.5T510-66q-7 3-14.5 4.5T480-60" />
  </Svg>
);
