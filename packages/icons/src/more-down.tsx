import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMoreDown = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M271-271h333q19.75 0 33.375 13.675Q651-243.649 651-223.825 651-204 637.375-190.5 623.75-177 604-177H224q-19.75 0-33.375-13.625T177-224v-380q0-19.75 13.675-33.375Q204.351-651 224.175-651 244-651 257.5-637.375 271-623.75 271-604zm212-212h333q19.75 0 33.375 13.675Q863-455.649 863-435.825 863-416 849.375-402.5 835.75-389 816-389H436q-19.75 0-33.375-13.625T389-436v-380q0-19.75 13.675-33.375Q416.351-863 436.175-863 456-863 469.5-849.375 483-835.75 483-816z" />
  </Svg>
);
