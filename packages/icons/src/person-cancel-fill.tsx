import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPersonCancelFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m780-512-51 50q-15 13-33.5 13T663-463q-15-15-14.5-33.5T663-530l50-50-50-50q-15-14-15-33.5t15-33.5q14-14 33-13.5t33 13.5l51 51 50-49q14-14 33.5-14.5T897-696q14 14 14 33t-14 33l-50 50 49 51q13 14 14 33t-13 33q-14 15-33.5 14.5T830-463zm-418 18q-77 0-126-49t-49-126q0-77 49-126t126-49q77 0 126.5 49T538-669q0 77-49.5 126T362-494M17-216v-27q0-42 21.5-76T99-371q77-34 138-48t125-14q65 0 126 14t137 48q39 18 61 51.5t22 76.5v27q0 39-27.5 66.5T613-122H111q-39 0-66.5-27.5T17-216" />
  </Svg>
);
