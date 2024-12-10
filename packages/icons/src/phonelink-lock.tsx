import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPhonelinkLock = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M640-320q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T726-640q33 0 56.5 23.5T806-560v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10zm46-200h80v-40q0-17-11.5-28.5T726-600q-17 0-28.5 10.925T686-562zM271-17q-38.775 0-66.388-27.612Q177-72.225 177-111v-738q0-38.775 27.612-66.387Q232.225-943 271-943h418q38.775 0 66.387 27.613Q783-887.775 783-849v135h-94v-45H271v558h418v-45h94v135q0 38.775-27.613 66.388Q727.775-17 689-17zm0-124v30h418v-30zm0-678h418v-30H271zm0 0v-30zm0 678v30z" />
  </Svg>
);
