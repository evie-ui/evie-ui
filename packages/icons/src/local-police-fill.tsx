import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalPoliceFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-434 82 61q6 5 13 1t5-13l-34-102 85-60q7-5 4.5-13.5T625-569H522l-31-98q-3-8-11-8t-11 8l-31 98H336q-8 0-10.5 8.5T330-547l82 60-34 101q-3 9 4 13.5t14 .5zm0 374q-8 0-15.5-1.5T450-66q-144-47-229.5-177.5T135-523v-189q0-30 16.5-55t44.5-35l251-94q16-6 33-6t33 6l251 94q28 10 45 35t17 55v189q0 149-86 279.5T510-66q-7 3-14.5 4.5T480-60" />
  </Svg>
);
