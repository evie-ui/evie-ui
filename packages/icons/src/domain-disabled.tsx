import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDomainDisabled = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m903-142-83-83v-379H442l-32-30v-135H278l-84-82h205q38.75 0 66.375 27.625T493-757v71h316q38.75 0 66.375 27.625T903-592zM838-6l-79-80H151q-38.75 0-66.375-27.125T57-180v-606l-31-31q-11-10-10.5-24T27-866q10-11 24.5-11T77-866L888-56q11 11 11 25.5T888-6Q877 6 863 5.5T838-6M140-169h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm165 330h105v-105H305zm0-165h105v-105H305zm165 165h207L572-274H470zm245-270h-38l-22-22v-38h60z" />
  </Svg>
);
