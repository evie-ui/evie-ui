import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCameraIndoorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-95q-39.75 0-66.875-27.125T135-189v-377q0-22.25 9.375-42T172-641l251-189q24.68-19 56.84-19Q512-849 537-830l251 189q18.25 13.25 28.125 33T826-566v377q0 39.75-27.625 66.875T731-95zm121-179h178q14.45 0 24.225-9.775Q562-293.55 562-308v-54l65 33q5 3 11 .065T644-339v-113q0-7.13-6-10.065-6-2.935-11 .065l-65 33v-54q0-14.45-9.775-24.225Q542.45-517 528-517H350q-14.025 0-23.513 9.775Q317-497.45 317-483v175q0 14.45 9.487 24.225Q335.975-274 350-274" />
  </Svg>
);