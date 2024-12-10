import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHumidityIndoor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-300q66 0 112.5-46T640-458q0-32-12-60.5T593-569l-80-79q-14.182-13-33.091-13T447-648l-80 79q-23 22-35 50.5T320-458q0 66 47.5 112T481-300m-74-160q0-13 5.565-25.014Q418.13-497.027 428-507l52-52 52.25 52.209Q542-497 547.5-484.854 553-472.707 553-460zM229-135q-39.8 0-66.9-27.1Q135-189.2 135-229v-377q0-22.036 9.547-41.752Q154.094-667.469 172-681l251-189q24.68-19 56.84-19Q512-889 537-870l251 189q18.375 13.531 28.188 33.248Q826-628.036 826-606v377q0 39.8-27.394 66.9Q771.213-135 731-135zm0-94h502v-381L480-792 229-609.667zm251-282" />
  </Svg>
);