import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGroups3Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m150-409 90-88-90-89-87 89zm564-10 96-155 98 155zm-234-72q-55 0-93.5-38.5T348-623q0-56 38.5-94t93.5-38q56 0 94 38t38 94q0 55-38 93.5T480-491M-12-275v-18q0-44.464 45-71.732T150.398-392h11.38q5.222 0 11.222.727-9 19.273-14.5 40.842Q153-328.861 153-305v77H35q-19.75 0-33.375-13.625T-12-275m240 0v-30q0-71 70-114t182-43q114 0 183 43t69 114v30q0 19.75-13.625 33.375T685-228H275q-19.75 0-33.375-13.625T228-275m582-117q73.5 0 117.75 27.268T972-293v18q0 19.75-13.625 33.375T925-228H807v-77q0-23.861-5-45.431-5-21.569-14-40.842 6-.727 11.171-.727z" />
  </Svg>
);