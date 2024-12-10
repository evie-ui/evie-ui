import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLabProfile = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M350-490q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T350-550h260q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T610-490zm0-160q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T350-710h260q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T610-650zM229-407h296q30.399 0 56.606 13.344Q607.812-380.312 627-357l104 136v-590H229zm0 258h438L553-299q-5.293-5.647-12.633-9.824Q533.027-313 525-313H229zm502 94H229q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h502q39.463 0 67.231 27.769Q826-850.463 826-811v662q0 39.05-27.769 66.525Q770.463-55 731-55m-502-94v-662zm0-164v-94z" />
  </Svg>
);
