import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEMobiledata = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M356-274q-17.75 0-29.875-12.125T314-316v-329q0-18.125 11.438-29.562Q336.875-686 355-686h255q15.15 0 25.575 9.975Q646-666.049 646-649.825q0 16.225-9.925 26.025Q626.15-614 610-614H386v98h224q15.15 0 25.575 9.975Q646-496.049 646-479.825q0 16.225-9.925 26.025Q626.15-444 610-444H386v98h224q15.15 0 25.575 9.975Q646-326.049 646-309.825q0 16.225-9.925 26.025Q626.15-274 610-274z" />
  </Svg>
);
