import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBatteryChargingFull = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M658-196h-55q-14.391 0-21.196-12.5Q575-221 583-233l97-152q5-7 13.5-5t8.5 10.75V-285h55q14.391 0 21.196 13Q785-259 777-247L680-94q-5 7-13.5 5T658-99.833zM297-55q-20.75 0-34.375-13.625T249-102v-692q0-19.625 13.625-33.812Q276.25-842 297-842h86v-16q0-19.625 13.625-33.812Q410.25-906 430-906h100q19.75 0 33.375 14.188Q577-877.625 577-858v16h87q19.75 0 33.375 14.188Q711-813.625 711-794v318q-24-4-48-2.5t-47 8.5v-277H344v598h119q11 28 27 51.5T529-55z" />
  </Svg>
);
