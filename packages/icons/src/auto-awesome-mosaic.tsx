import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAutoAwesomeMosaic = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M457-95H189q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h268zm-94-94v-582H189v582zm142-316v-361h266q39.463 0 67.231 27.769Q866-810.463 866-771v266zm95-95h171v-171H600zM505-95v-362h361v268q0 39.05-27.769 66.525Q810.463-95 771-95zm95-94h171v-174H600zm0-174" />
  </Svg>
);
