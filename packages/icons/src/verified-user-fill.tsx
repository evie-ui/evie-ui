import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVerifiedUserFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m439-450-76-76q-10-10-25.5-10T311-525q-10 10-10 25t10 26l91 92q14 15 34 15t34-15l177-177q11-10 11-25t-11-25q-10-10-25.5-9.5T597-608zm41 390q-8 0-15.5-1.5T450-66q-144-47-229.5-177.5T135-523v-189q0-30 16.5-55t44.5-35l251-94q16-6 33-6t33 6l251 94q28 10 45 35t17 55v189q0 149-86 279.5T510-66q-7 3-14.5 4.5T480-60" />
  </Svg>
);
