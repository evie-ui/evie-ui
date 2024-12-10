import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoiseControlOnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.404-55q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55-391.406 55-480.362q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238-906 480.279-906q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480.266q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276-55 480.404-55m.096-94q137.5 0 234-96.372T811-480.5q0-137.5-96.312-234Q618.375-811 479.5-811q-137.5 0-234 96.312Q149-618.375 149-479.5q0 137.5 96.372 234T480.5-149m38.267-91q-39.767 0-70.32-24.326Q417.895-288.651 404-326q-2.812-8.724-6.363-15.966-3.55-7.241-9.637-13.034l-50-51q-25.655-26.894-41.828-60.899Q280-500.905 280-537.528q0-76.958 52.328-129.715Q384.656-720 459.912-720q52.177 0 96.132 27Q600-666 622-619q10 21-1.75 40t-33.972 19q-12.334 0-22.097-6.271Q554.417-572.542 550-584q-13.508-25.536-37.222-40.768Q489.064-640 460.409-640 418-640 389-611.124q-29 28.876-29 70.705 0 20.914 7.5 40.667Q375-480 390-466l55 54q14.243 14.138 22.414 30.476Q475.585-365.186 482-347q4.469 12 15.09 19.5 10.621 7.5 23.551 7.5 10.94 0 19.879-6.19 8.938-6.191 14.48-15.81 4-9 13.819-13.5t20.155-4.5q22.523 0 34.275 19Q635-322 624-303q-15 30-43.574 46.5-28.573 16.5-61.659 16.5m25.351-170Q565-410 579.5-424.618q14.5-14.617 14.5-35.5Q594-481 579.382-495.5q-14.617-14.5-35.5-14.5Q523-510 508.5-495.382q-14.5 14.617-14.5 35.5Q494-439 508.618-424.5q14.617 14.5 35.5 14.5" />
  </Svg>
);
