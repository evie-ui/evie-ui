import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHumidityIndoorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-300q66 0 112.5-46T640-458q0-32-12-60.5T593-569l-80-79q-14-13-33-13t-33 13l-80 79q-23 22-35 50.5T320-458q0 66 47.5 112T481-300m-74-160q0-13 5.565-25.014Q418.13-497.027 428-507l52-52 52.25 52.209Q542-497 547.5-485.012T553-460zM229-135q-39.75 0-66.875-27.125T135-229v-377q0-22.25 9.375-42T172-681l251-189q24.68-19 56.84-19Q512-889 537-870l251 189q18.25 13.25 28.125 33T826-606v377q0 39.75-27.625 66.875T731-135z" />
  </Svg>
);
