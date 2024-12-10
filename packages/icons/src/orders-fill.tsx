import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOrdersFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M139-229v-474L79-832q-8-18-2-36.5t25-26.5q18-10 37-2.5t28 26.5l75 168h478l74-169q9-19 27.5-25.5T859-895q18 8 24.5 27t-1.5 37l-59 128v474q0 40-27.5 67T728-135H233q-40 0-67-27t-27-67m257-222h170q16 0 26-10t10-26q0-16-10-26t-26-10H396q-16 0-26 10t-10 26q0 16 10 26t26 10" />
  </Svg>
);
