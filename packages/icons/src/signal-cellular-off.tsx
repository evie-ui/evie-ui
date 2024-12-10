import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSignalCellularOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M282-149h427L496-363zM168-55q-32 0-43.5-29t11.5-52l293-293L97-761q-11-11-11.5-26T96-813q11-10 25.5-10t25.5 10L890-70q10 10 10.5 24.5T890-20Q879-9 864.5-9T839-20l-36-35zm738-86-95-94v-443L589-457l-66-67 302-301q23-23 52-11t29 44zM603-256" />
  </Svg>
);
