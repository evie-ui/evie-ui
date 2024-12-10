import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDeveloperBoardFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M154-95q-39 0-67-27.5T59-189v-582q0-39 28-67t67-28h581q39 0 67 28t28 67v51.146h36q14.75 0 24.875 10.146T901-684.781Q901-670 890.875-659.5 880.75-649 866-649h-36v133h35.175Q880-516 890.5-505.825q10.5 10.176 10.5 26Q901-464 890.375-454T865-444h-35v133h36.175Q881-311 891-300.825q10 10.176 10 25 0 14.825-10.125 25.422Q880.75-239.806 866-239.806h-36V-189q0 39-28 66.5T735-95zm97-145h159q19.75 0 33.375-13.625T457-287v-106q0-19.75-13.625-33.375T410-440H251q-19.75 0-33.375 13.625T204-393v106q0 19.75 13.625 33.375T251-240m279-336h111q17.75 0 30.375-12.625T684-619v-54q0-19.75-13.625-33.375T637-720H534q-19.75 0-33.375 13.625T487-673v54q0 17.75 12.625 30.375T530-576M251-470h159q19.75 0 33.375-13.625T457-517v-156q0-19.75-13.625-33.375T410-720H251q-19.75 0-33.375 13.625T204-673v156q0 19.75 13.625 33.375T251-470m283 230h103q19.75 0 33.375-13.625T684-287v-212q0-19.75-13.625-33.375T637-546H534q-19.75 0-33.375 13.625T487-499v212q0 19.75 13.625 33.375T534-240" />
  </Svg>
);