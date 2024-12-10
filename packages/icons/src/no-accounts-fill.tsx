import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoAccountsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M595-504 395-703q16-9 39-17.5t46-8.5q61 0 102 41.5T623-586q0 24-8 49t-20 33M226-264q63-38 121.5-58.5T480-343q34 0 63.5 5t45.5 12L472-444q-59-2-93.5-36.5T341-569L220-691q-36 47-53.5 98.5T149-480q0 58 18 110.5T226-264m517-7q30-37 49-90t19-119q0-150-90.5-240.5T480-811q-66 0-116.5 18.5T271-743zM480-55q-90 0-167.5-32.5t-135-90q-57.5-57.5-90-135T55-480q0-90 32.5-167.5t89.5-135Q234-840 311.5-873T479-906q90 0 168 33t135.5 90.5Q840-725 873-647.5T906-480q0 90-33 167.5t-90.5 135q-57.5 57.5-135 90T480-55" />
  </Svg>
);
