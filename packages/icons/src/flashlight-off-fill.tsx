import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlashlightOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M329-149v-397L72-812q-11-11-10.5-24.5T73-862q11-11 25.5-11t25.5 11l729 729q11 11 11 24.5T853-84q-11 12-25.5 12T802-83L679-205v87q0 26-18.5 44.5T616-55H424q-40 0-67.5-27T329-149m440-606H328l-80-85q7-28 30.5-46.5T334-905h341q39 0 66.5 27.5T769-810zm-90 352L388-695h381v28q0 14-4 27.5T753-614l-74 108z" />
  </Svg>
);
