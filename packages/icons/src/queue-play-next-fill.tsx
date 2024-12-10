import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgQueuePlayNextFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M443-494v89q0 14.9 10.175 25.45 10.176 10.55 26 10.55Q495-369 505-379.125T515-405v-89h89q14.9 0 24.95-10.57Q639-515.14 639-530.07T628.95-555Q618.9-565 604-565h-89v-88q0-14.9-10.175-25.45-10.176-10.55-26-10.55Q463-689 453-678.875T443-653v88h-89q-14.9 0-24.95 10.07-10.05 10.07-10.05 25t10.55 25.43Q340.1-494 355-494zm432 267-96.874-96.874Q767-334.957 767.5-350.479 768-366 778.611-377q10.61-11 26.178-11 15.567 0 26.211 11l117 116q14 14.364 14 34.182T948-193L831.289-76.289Q820.043-65 804.521-65 789-65 778-76.183q-11-10.75-10.5-27.5T779-131zM364-95q-19.75 0-33.375-13.625T317-142v-33H149q-39.05 0-66.525-27.475Q55-229.95 55-269v-502q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v241q0 19.75-14.188 33.375Q877.625-483 858-483h-91q-30.75 0-52.375 21.625T693-409v189q0 19.75-13.188 32.375Q666.625-175 648-175h4v33q0 19.75-13.625 33.375T605-95z" />
  </Svg>
);