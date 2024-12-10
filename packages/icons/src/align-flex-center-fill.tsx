import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlignFlexCenterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M497.825-55Q477-55 463.5-68.625 450-82.25 450-102v-311H149q-19.75 0-33.375-13.625T102-460v-40q0-19.75 13.625-33.375T149-547h301v-311q0-19.75 13.675-33.875Q477.351-906 498.175-906 518-906 531.5-891.875 545-877.75 545-858v311h266q19.75 0 33.375 13.625T858-500v40q0 19.75-13.625 33.375T811-413H545v311q0 19.75-13.675 33.375Q517.649-55 497.825-55" />
  </Svg>
);