import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSystemUpdateFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-738q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm0-184h418v-558H271zm179-229v-168q0-13 8.5-21.5T480-628q13 0 21.5 8.5T510-598v168l63-63.239q9-8.761 20.5-9.261T615-494q9 10 9 22.122T615-451L514-348q-14.364 14-34.182 14T446-348L345-451q-9.917-8.75-9.458-20.875Q336-484 346-494q8.75-9 21.375-8.5T389-493z" />
  </Svg>
);
