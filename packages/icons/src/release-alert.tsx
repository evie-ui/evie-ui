import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgReleaseAlert = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m314-65-60-103-120-25q-18-3-29-18.125T96-244l14-115.704L34-449q-12-13.39-12-31.195T34-511l76-88.297L96-715q-2-17.75 9-32.875T134-767l120.31-24.197L314-895q8.88-14.562 26.42-21.281Q357.96-923 375-915l105 49 105-49q17-7 34.556-1.318Q637.111-910.636 646-896l60.69 104.803L826-767q18 4 29 19.125T864-715l-14 115.703L926-511q12 13.39 12 31.195T926-449l-76 89.296L864-244q2 17.75-9 32.875T826-193l-119 25-61 104q-8.889 14.636-26.444 20.318Q602-38 585-45L480-94 375-45q-17 7-34.556.818Q322.889-50.364 314-65m62.736-85 103.121-44.564L586-150l65-97 113-29-11-116.191 77-87.894L753-570l11-116-113-27-66.659-97-104.159 44.458L374-810l-64.718 97.241L197-686.448 207-570l-77 90 77 88-10 118.462 112.099 26.307zM480-255q24 0 39.5-15t15.5-39q0-24-15.5-40T480-365q-24 0-39.5 16T425-309q0 24 15.5 39t39.5 15m3-177q20 0 33.5-13.5T530-479v-176q0-20-13.5-33.5T483-702q-20 0-33.5 13.5T436-655v176q0 20 13.5 33.5T483-432" />
  </Svg>
);
