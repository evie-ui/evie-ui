import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFactoryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M151-57q-39 0-66.5-27.5T57-151v-363q0-28 16-52t42-35l212-90q21-9 38.5 3.5T383-654v20l135-55q24-9 44.5 5t20.5 39v62h320v432q0 39-27.5 66.5T809-57zm288-183h82v-160h-82zm-172 0h83v-160h-83zm343 0h83v-160h-83zm288-383H702l30-233q2-18 14.5-29.5T777-897h42q18 0 31.5 11t15.5 29z" />
  </Svg>
);
