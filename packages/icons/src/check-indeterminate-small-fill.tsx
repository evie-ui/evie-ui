import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCheckIndeterminateSmallFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M262-433q-19.75 0-33.375-13.675Q215-460.351 215-480.175 215-500 228.625-513.5 242.25-527 262-527h436q19.75 0 33.875 13.675Q746-499.649 746-479.825 746-460 731.875-446.5 717.75-433 698-433z" />
  </Svg>
);
