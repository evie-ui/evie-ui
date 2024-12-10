import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShieldLockedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-60q-8.32 0-15.88-1.5Q456.56-63 450-66q-145.502-49.2-230.251-175.572T135-523v-189q0-30.257 16.375-55.162Q167.75-792.068 196-802l251-94q16-6 33-6t33 6l251 94q28.25 9.932 45.125 34.838Q826-742.257 826-712v189q0 16.333-1.25 31.167Q823.5-477 822-461q-6-1-11.357-1.5-5.357-.5-10.181-.5Q715-463 654.9-408.621q-60.1 54.38-60.1 135.562v169.133q-20.434 12.161-41.784 21.044Q531.667-74 510-66q-6.56 3-14.12 4.5T480-60m208.929 5q-18.223 0-30.076-13.559Q647-82.118 647-100.01v-128.821q0-18.018 12.059-31.093T689-273v-40q0-37.65 25.2-63.825Q739.4-403 776.788-403 813-403 838.5-376.825T864-313v40q17.882 0 29.941 13.075Q906-246.85 906-228.544v128.82q0 18.018-11.922 31.371Q882.155-55 864.344-55zM735-273h84v-40q0-18-12.105-32-12.106-14-30-14Q758-359 746.5-345T735-313z" />
  </Svg>
);
