import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWifiProtectedSetup = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M693-222q-24 20-24-3t4-32q5-20 7.5-41t2.5-43q0-89-39.5-163T538-627l-61 61q-11 11-26 5.5T436-582v-252q0-20 13.5-33.5T483-881h252q16 0 21.5 15t-5.5 26l-61 61q58 53 92.5 125.5T817-497q0 51-12.5 97T769-314q-15 28-34 50.5T693-222M209-120l61-61q-59-53-92.5-125.5T144-464q0-50 12-96t35-87q15-27 33.5-49.5T267-739q23-19 23.5 4t-2.5 31q-5 21-8 42t-3 43q0 89 39.5 163T422-333l62-62q10-10 25.5-4.5T525-379v253q0 20-14 33.5T477-79H225q-16 0-21.5-15t5.5-26" />
  </Svg>
);