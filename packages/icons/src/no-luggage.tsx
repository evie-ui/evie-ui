import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoLuggage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m790-268-79-80v-299H413L305-753h34v-96q0-23.75 16.625-40.375T396-906h172q23.75 0 40.375 16.625T625-849v123h86q32.75 0 55.875 23.125T790-647zM648-410l-67-68v-83q0-12.833 10-22.917Q601-594 614.5-594t23.5 10.083q10 10.084 10 22.917zM406-726h152v-113H406zM299-45q-20.37 0-34.767-14.638Q249.836-74.275 249.836-95q-33.586 0-56.711-23.125T170-174v-461q0-37 22-64t52-27l81 79h-75v473h461v-87l78 79.074V-163q-4 28.75-26.206 48.375T711-95q0 21-15 35.5T660.5-45q-20.5 0-35-14.638Q611-74.275 611-95H349q0 21-14.638 35.5Q319.725-45 299-45m47-182q-14 0-24-9.5T312-260v-332h67v332q0 13-10.083 23-10.084 10-22.917 10m134 0q-14 0-23.5-9.5T447-260v-264l67 65v199q0 12.833-10 22.917Q494-227 480-227m135 0q-14 0-24-9.5t-10-23.654V-391l67 67v64q0 12.833-10.083 22.917Q627.833-227 615-227M820-51 47-823q-10-10.2-10.5-25.1Q36-863 47.158-874q10.737-11 25.5-11T98-874l773 773q10 11.182 10.5 25.09Q882-62 870.842-51q-10.737 11-25.5 11T820-51" />
  </Svg>
);