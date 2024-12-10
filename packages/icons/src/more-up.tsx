import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMoreUp = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M694-694H361q-19.75 0-33.375-13.675Q314-721.351 314-741.175 314-761 327.625-775 341.25-789 361-789h380q19.75 0 33.875 14.125T789-741v380q0 19.75-14.175 33.375-14.176 13.625-34 13.625Q721-314 707.5-327.625 694-341.25 694-361zM483-483H150q-19.75 0-33.375-13.675Q103-510.351 103-530.175 103-550 116.625-563.5 130.25-577 150-577h380q19.75 0 33.375 13.625T577-530v380q0 19.75-13.675 33.375Q549.649-103 529.825-103 510-103 496.5-116.625 483-130.25 483-150z" />
  </Svg>
);
