import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMan2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M420-119v-230h-56q-19.75 0-33.375-13.625T317-396v-189q0-38.725 27.638-66.362Q372.275-679 411-679h138q38.725 0 66.362 27.638Q643-623.725 643-585v189q0 19.75-13.625 33.375T596-349h-56v230q0 19.75-13.625 33.375T493-72h-26q-19.75 0-33.375-13.625T420-119m60.212-621Q445-740 420.5-764.788q-24.5-24.787-24.5-59Q396-859 420.288-884q24.287-25 59.5-25Q515-909 539.5-884.212q24.5 24.787 24.5 60Q564-790 539.712-765q-24.287 25-59.5 25" />
  </Svg>
);
