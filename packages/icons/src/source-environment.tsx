import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSourceEnvironment = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M57-133v-619q0-12.154 6-23.077Q69-786 80-793l171-102q10.73-7 23.811-7T300-895l171 102q10 7.062 16 17.966T493-752v66h363q19.75 0 33.375 13.625T903-639v506q0 19.75-13.625 33.375T856-86H104q-19.75 0-33.375-13.625T57-133m83-36h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm165 0h105v-105H305zm0 495h515v-435H305zm275-330h105q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T685-439H580q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T580-499m0 165h105q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T685-274H580q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T580-334M470-468.825q0 12.825-8.675 21.325-8.676 8.5-21.5 8.5-12.825 0-21.325-8.675-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5M439.825-274Q427-274 418.5-282.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5" />
  </Svg>
);
