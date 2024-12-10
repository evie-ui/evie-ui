import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgYourTripsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M349-200h262q13 0 21.5-8.5T641-230q0-13-8.5-21.5T611-260H349q-13 0-21.5 8.5T319-230q0 13 8.5 21.5T349-200M269-55q-39 0-66.5-27.5T175-149v-341q0-94 53-171.5T364-774v-22q0-48 33.5-84.5T480-917q49 0 82.5 36.5T596-796v22q83 35 136.5 112.5T786-490v341q0 39-28 66.5T691-55zm166-739q5-1 20.5-1.5t24.5-.5q9 0 24.5.5T525-794v-2q0-19-12.5-34.5T480-846q-20 0-32.5 15.5T435-796zm45 344 41 32q7 4 14 0t5-13l-16-52 40-28q7-5 4.5-13.5T558-533h-50l-17-53q-3-8-11-8t-11 8l-16 53h-50q-9 0-11.5 8.5T396-511l40 28-15 52q-3 9 4 13t14 0z" />
  </Svg>
);
