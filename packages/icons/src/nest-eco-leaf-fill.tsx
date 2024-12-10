import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestEcoLeafFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M161-168q-14-14-14-32.5t14-32.5l52-54q-32-42-50-92.5T145-487q0-140 97.5-237.5T480-822h335v335q0 140-97.5 237.5T480-152q-57 0-108-18t-93-50l-53 52q-14 14-32.5 14T161-168m173-173q15 14 33.5 14t32.5-14l146-146q14-14 14-33t-14-33q-13-13-32.5-13T481-553L331-404q-13 13-12 31.5t15 31.5" />
  </Svg>
);
