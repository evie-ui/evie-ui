import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNearbyOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m753-306-78-78 97-97-300-300-98 97-78-79 110-110q14-14 31.5-20t34.5-6q19 0 36 6t29 20l325 325q28 28 27 67.5T862-415zM650-204 539-91q-13 14-30 20.5T473-64q-19 0-36.5-7T405-91L80-416q-12-13-18.5-30.5T55-483q0-19 6.5-36T80-549l113-112L69-786q-11-12-11-26t11-25q11-11 25-11t26 11l712 713q11 11 10.5 26T831-72q-11 11-25 10.5T781-73zM171-482l301 301 99-100-39-39-45 45q-6 7-15.5 7t-15.5-6L263-467q-6-6-5.5-15t6.5-15l45-45-39-39zm465 60L413-645l43-43q6-7 15.5-7t16.5 7l191 191q7 7 6.5 16.5T679-465z" />
  </Svg>
);
