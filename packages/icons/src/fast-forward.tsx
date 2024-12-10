import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFastForward = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M41-282v-396q0-21 14-34t33-13q8 0 14.5 2.5T115-716l286 197q10 7 15 17.5t5 21.5q0 11-5 21.5T401-441L115-244q-6 4-12.5 6.5T88-235q-19 0-33-13t-14-34m462 0v-396q0-21 14-34t33-13q7 0 14 2.5t13 6.5l285 197q11 7 16 17.5t5 21.5q0 11-5 21.5T862-441L577-244q-6 4-13 6.5t-14 2.5q-19 0-33-13t-14-34m-367-90 155-108-155-108zm461 0 157-108-157-108z" />
  </Svg>
);
