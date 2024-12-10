import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalHospitalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M418-418v83q0 25.833 18.135 43.917Q454.27-273 480.176-273q25.907 0 43.866-18.083Q542-309.167 542-335v-83h83q25.833 0 43.917-18.135Q687-454.27 687-480.176q0-25.907-18.083-43.866Q650.833-542 625-542h-83v-83q0-25.833-18.135-43.917Q505.73-687 479.824-687q-25.907 0-43.866 18.083Q418-650.833 418-625v83h-83q-25.833 0-43.917 18.135Q273-505.73 273-479.824q0 25.907 18.083 43.866Q309.167-418 335-418zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
