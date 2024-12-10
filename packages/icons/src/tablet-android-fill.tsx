import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTabletAndroidFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M191-17q-38.775 0-66.388-27.612Q97-72.225 97-111v-738q0-38.775 27.612-66.387Q152.225-943 191-943h578q38.775 0 66.387 27.613Q863-887.775 863-849v738q0 38.775-27.613 66.388Q807.775-17 769-17zm0-244h578v-498H191zm230.235 125h123.53Q553-136 559-142t6-14.5q0-8.5-6-14t-14.235-5.5h-123.53q-9.235 0-14.735 5.5t-5.5 14q0 8.5 5.5 14.5t14.735 6" />
  </Svg>
);
