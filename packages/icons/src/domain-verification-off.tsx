import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDomainVerificationOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m821-50-85-85H149q-39.75 0-66.875-27.125T55-229v-502q0-32.75 20.625-58.875T128-823h20v101L47-823q-10-10.067-10-25.033Q37-863 48.053-874q10.052-10 24.5-10Q87-884 98-874l774 773q10 11 10 25.5T870.947-50q-10.052 10-24.5 10Q832-40 821-50M149-229h492L240-631h-91zm742 46-80-79v-369H443L248-826h563q39.75 0 67.375 27.625T906-731v502.163Q906-215 901.5-204T891-183M603-471l-52-51 30-30q11.13-11 26.065-11T633-551.897q10 11.104 10 26Q643-511 633-501zm-51 51-80 80q-14 14-34 14t-34-14l-76-77q-11-10.13-11-25.065T328.103-468q10.104-11 25-11Q368-479 379-468l59 59 63-63z" />
  </Svg>
);
