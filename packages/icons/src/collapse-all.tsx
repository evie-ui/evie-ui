import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCollapseAll = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-251 323-94q-14 14-33 14t-33-14q-14-14-14-33t14-33l157-157q28-28 66-28t66 28l157 157q14 14 14 33t-14 33q-14 14-33 14t-33-14zm0-459 157-157q14-14 33-14t33 14q14 14 14 33t-14 33L546-644q-28 28-66 28t-66-28L257-801q-14-14-14-33t14-33q14-14 33-14t33 14z" />
  </Svg>
);
