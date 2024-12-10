import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTabletMac = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.175-126q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5M191-17q-38.775 0-66.388-27.612Q97-72.225 97-111v-738q0-38.775 27.612-66.387Q152.225-943 191-943h578q38.775 0 66.387 27.613Q863-887.775 863-849v738q0 38.775-27.613 66.388Q807.775-17 769-17zm0-184v90h578v-90zm0-60h578v-498H191zm0-558h578v-30H191zm0 0v-30zm0 618v90z" />
  </Svg>
);
