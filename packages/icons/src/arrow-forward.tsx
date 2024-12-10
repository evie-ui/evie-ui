import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowForward = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M645-433H182q-20 0-33.5-13.5T135-480q0-20 13.5-33.5T182-527h463L447-725q-14-14-14.58-33.673-.58-19.672 13.5-33.927Q460-807 479.818-806.5 499.636-806 514-792l278 278q6.909 7.167 10.955 16.194Q807-488.778 807-479.889q0 8.889-4.045 17.839Q798.909-453.1 792-446L513-168q-15.5 15-34.25 15T446-168.232q-14-14.072-14-32.92Q432-220 446-234z" />
  </Svg>
);
