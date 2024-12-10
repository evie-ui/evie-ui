import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFactory = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M151-57q-38.75 0-66.375-27.625T57-151v-363q0-28.5 16-52.25T115-601l212-90q21-9 38.5 3.25T383-654v20l135-55q24-9 44.5 5.067Q583-669.867 583-645v62h320v432q0 38.75-27.625 66.375T809-57zm0-94h658v-337.512H494V-575l-200 80v-80l-143 62zm288-89h82v-160h-82zm-172 0h83v-160h-83zm343 0h83v-160h-83zm293-343H697l35-273q2-18 15.081-29.5T778-897h41q17.946 0 31.306 10.929Q863.667-875.143 866-857zM151-151h658z" />
  </Svg>
);
