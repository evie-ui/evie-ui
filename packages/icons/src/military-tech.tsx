import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMilitaryTech = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-139-84 62q-14 10-27.5 0t-9.5-26l32-104-84-63q-14-10-8.75-26T320-312h105l25-95.432L314-488q-24.158-14.043-37.579-37.021Q263-548 263-576v-255q0-40.213 27.625-67.606Q318.25-926 357-926h246q38.75 0 66.375 27.394Q697-871.213 697-831v255q0 28-13.421 50.979Q670.158-502.043 646-488l-137 80.568L535-312h104q16.5 0 21.75 16T652-270l-84 63 32 104q4 16-9.5 25.5T563-78zM346-843v265.489q0 7 4.5 13t13.5 11L454-505v-338zm268 0H514v338l82-48.511q9-5 13.5-11t4.5-13zM514-674" />
  </Svg>
);
