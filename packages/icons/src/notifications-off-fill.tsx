import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNotificationsOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M690-175H182q-20 0-33.5-13.5T135-222q0-20 13.5-33.5T182-269h24v-279q0-43 11.5-84t36.5-78l-21 162h84L80-784q-11-11-10.5-25T81-834q11-10 25-10t25 10l711 713q11 11 11 25t-11 25q-11 11-25 11t-25-11zm65-135L303-761q22-19 46.5-32.5T403-812v-16q0-33 22.5-55.5T480-906q32 0 54.5 22.5T557-828v16q91 18 144.5 94.5T755-548zM481-46q-37 0-63-26t-26-63h177q0 37-26 63t-62 26" />
  </Svg>
);
