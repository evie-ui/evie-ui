import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNoLuggageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M406-726h152v-113H406zM299-45q-20.37 0-34.767-14.638Q249.836-74.275 249.836-95 216-95 193-118t-23-56v-461q0-37 22.5-64t52.5-27l564 563h-20q-4 29-26 48.5T711-95q0 21-15 35.5T660.5-45q-20.5 0-35-14.638Q611-74.275 611-95H349q0 21-14.638 35.5Q319.725-45 299-45m521-6L47-823q-10-10-10.5-25T47-874q10.579-11 25.5-11T98-874l773 773q10 11 10.5 25T871-51q-10.579 11-25.5 11T820-51m-30-217L648-410v-151q0-12.833-10.083-22.917Q627.833-594 615-594q-14 0-24 10.083-10 10.084-10 22.917v83L305-753h34v-96q0-24.25 16.375-40.625T396-906h172q24.25 0 40.625 16.375T625-849v123h86q33 0 56 23t23 56zm-444.5 41q13.5 0 23.5-10.083 10-10.084 10-22.917v-332h-67v332q0 14 10 23.5t23.5 9.5m134.5 0q14 0 24-10.083 10-10.084 10-22.917v-199l-67-65v264q0 14 9.5 23.5T480-227m134.5 0q13.5 0 23.5-10.083 10-10.084 10-22.917v-64l-67-67v130.846Q581-246 591-236.5t23.5 9.5" />
  </Svg>
);