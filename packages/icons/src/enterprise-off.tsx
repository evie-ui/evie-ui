import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEnterpriseOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m854-6-89.273-89H149q-39.05 0-66.525-27.475Q55-149.95 55-189v-450q0-39.463 27.475-67.231Q109.95-734 149-734h80l94 95H149v450h523L43-817l51-51L905-56zm52-177-95-95v-361H447L297-791v-43q0-38.05 27.975-66.025Q352.95-928 391-928h178q39.05 0 66.525 27.975Q663-872.05 663-834v100h148q38.463 0 66.731 27.769Q906-678.463 906-639zM391-734h178v-100H391zm56 320" />
  </Svg>
);