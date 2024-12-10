import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScreenshotFrame = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M177-692v-119q0-39.463 27.475-67.231Q231.95-906 271-906h119v84H260v130zm94 637q-39.05 0-66.525-27.475Q177-109.95 177-149v-119h83v130h130v83zm429-637v-130H570v-84h119q39.05 0 66.525 27.769Q783-850.463 783-811v119zM570-55v-83h130v-130h83v119q0 39.05-27.475 66.525Q728.05-55 689-55z" />
  </Svg>
);
