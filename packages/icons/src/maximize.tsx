import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMaximize = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-771q-19.75 0-33.375-13.675Q135-798.351 135-818.088q0-19.737 13.625-33.824Q162.25-866 182-866h596q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q826-798 811.812-784.5 797.625-771 778-771z" />
  </Svg>
);
