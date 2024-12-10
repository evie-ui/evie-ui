import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEmptyDashboard = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-229h231v-171H229zm0-211h231v-291H229zm271 211h230v-291H500zm0-331h230v-171H500zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h581q39.463 0 67.231 27.769Q865-810.463 865-771v51h71v71h-71v133h71v72h-71v133h71v71h-71v51q0 39.05-27.769 66.525Q809.463-95 770-95zm0-94h581v-582H189zm0-582v582z" />
  </Svg>
);
