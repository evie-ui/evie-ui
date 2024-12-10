import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBattery0Bar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M297-55q-20.75 0-34.375-13.625T249-102v-692q0-19.75 13.625-33.875T297-842h86v-16q0-19.75 13.625-33.875T430-906h100q19.75 0 33.375 14.125T577-858v16h87q19.75 0 33.375 14.125T711-794v692q0 19.75-13.625 33.375T664-55zm47-94h272v-598H344z" />
  </Svg>
);
