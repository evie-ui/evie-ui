import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOutbound = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M566-504v74q0 18.7 12.711 31.35 12.71 12.65 31.5 12.65Q629-386 641.5-398.65T654-430v-177q0-19.75-13.625-33.375T607-654H430q-18.7 0-31.35 12.711-12.65 12.71-12.65 31.5Q386-591 398.65-578.5T430-566h73L315-378q-14 13-14 31.158t13.652 31Q328-302 346.467-302q18.466 0 32.533-14zM480.404-55q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55-391.406 55-480.362q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238-906 480.279-906q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480.266q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276-55 480.404-55m.096-94q137.5 0 234-96.372T811-480.5q0-137.5-96.312-234Q618.375-811 479.5-811q-137.5 0-234 96.312Q149-618.375 149-479.5q0 137.5 96.372 234T480.5-149m-.5-331" />
  </Svg>
);
