import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDone = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m378-358 350-349q14.2-14 33.6-14 19.4 0 33.4 14.053 14 14.052 14 33.8Q809-653.4 795-639L412-256q-14.364 14-34.182 14T344-256L164-436q-14-14.467-14-34.233Q150-490 164.053-504q14.052-14 33.8-14Q217.6-518 232-504z" />
  </Svg>
);
