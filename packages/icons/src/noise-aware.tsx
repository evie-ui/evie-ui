import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNoiseAware = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-810q-19 0-33-14t-14-34q0-20 14-33.5t33.5-13.5q19.5 0 33 13.625T527-857.5q0 19.5-13.625 33.5T480-810m0 755q-19 0-33-14t-14-34q0-20 14-33.5t33.5-13.5q19.5 0 33 13.625T527-102.5Q527-83 513.375-69T480-55M181.5-668q-19.5 0-33.5-14t-14-34q0-20 14-33.5t34-13.5q20 0 33.5 13.625T229-715.5q0 19.5-13.625 33.5T181.5-668m597 471q-19.5 0-33.5-14t-14-34q0-20 14-33.5t34-13.5q20 0 33.5 13.625T826-244.5q0 19.5-13.625 33.5T778.5-197M110-353q-19 0-33-14t-14-33.5q0-19.5 14-33t33.5-13.5q19.5 0 33 13.625T157-400q0 19-13.625 33T110-353m738.5-160q-19.5 0-33.5-14t-14-33.5q0-19.5 14-33t34-13.5q20 0 33.5 13.625T896-560q0 19-13.625 33T848.5-513M324-89q-19 0-33-14t-14-33.5q0-19.5 14-33t33.5-13.5q19.5 0 33 13.625T371-136q0 19-13.625 33T324-89m312-686q-19 0-33-14t-14-34q0-20 14-33.5t33.5-13.5q19.5 0 33 13.625T683-822.5q0 19.5-13.625 33.5T636-775m0 685q-19 0-33-14t-14-33.5q0-19.5 14-33t33.5-13.5q19.5 0 33 13.625T683-137q0 19-13.625 33T636-90M324-775q-19 0-33-14t-14-34q0-20 14-33.5t33.5-13.5q19.5 0 33 13.625T371-822.5q0 19.5-13.625 33.5T324-775m526 422q-19 0-33-14t-14-33.5q0-19.5 14-33t33.5-13.5q19.5 0 33 13.625T897-400q0 19-13.625 33T850-353M110.5-513Q91-513 77-527t-14-33.5q0-19.5 14-33t34-13.5q20 0 33.5 13.625T158-560q0 19-13.625 33T110.5-513m668-155q-19.5 0-33.5-14t-14-34q0-20 14-33.5t34-13.5q20 0 33.5 13.625T826-715.5q0 19.5-13.625 33.5T778.5-668m-597 471q-19.5 0-33.5-14t-14-34q0-20 14-33.5t34-13.5q20 0 33.5 13.625T229-244.5q0 19.5-13.625 33.5T181.5-197m337.267-43q-39.767 0-70.32-24.326Q417.895-288.651 404-326q-2.812-8.724-6.363-15.966-3.55-7.241-9.637-13.034l-50-51q-25.655-26.894-41.828-60.899Q280-500.905 280-537.528q0-76.958 52.328-129.715Q384.656-720 459.912-720q52.177 0 96.132 27Q600-666 622-619q10 21-1.75 40t-33.972 19q-12.334 0-22.097-6.271Q554.417-572.542 550-584q-13.508-25.536-37.222-40.768Q489.064-640 460.409-640 418-640 389-611.124q-29 28.876-29 70.705 0 20.914 7.5 40.667Q375-480 390-466l55 54q14.243 14.138 22.414 30.476Q475.585-365.186 482-347q4.469 12 15.09 19.5 10.621 7.5 23.551 7.5 10.94 0 19.879-6.19 8.938-6.191 14.48-15.81 4-9 13.819-13.5t20.155-4.5q22.523 0 34.275 19Q635-322 624-303q-15 30-43.574 46.5-28.573 16.5-61.659 16.5m25.351-170Q565-410 579.5-424.618q14.5-14.617 14.5-35.5Q594-481 579.382-495.5q-14.617-14.5-35.5-14.5Q523-510 508.5-495.382q-14.5 14.617-14.5 35.5Q494-439 508.618-424.5q14.617 14.5 35.5 14.5" />
  </Svg>
);
