import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStreamApps = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M634-434h213v-133H634zm6 74-39 39q-11 11-26 5.083-15-5.916-15-21.083v-256q0-19.75 13.625-33.375T607-640h266q19.75 0 33.375 13.625T920-593v186q0 19.75-13.625 33.375T873-360zM271-17q-38.775 0-66.388-27.612Q177-72.225 177-111v-738q0-38.775 27.612-66.387Q232.225-943 271-943h418q38.775 0 66.387 27.613Q783-887.775 783-849v135h-94v-45H271v558h418v-45h94v135q0 38.775-27.613 66.388Q727.775-17 689-17zm0-124v30h418v-30zm0-678h418v-30H271zm0 0v-30zm0 678v30zm363-293v-133z" />
  </Svg>
);
