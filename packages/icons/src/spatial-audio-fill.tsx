import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSpatialAudioFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M678-678q-46-46-73-102.5T572-901q-2-17 10-29.5t30-12.5q17 0 28.5 11t15.5 29q6 47 27 89.5t55 76.5q34 34 76 55t89 26q18 4 29 16t11 29q0 18-12.5 29.5T902-572q-63-6-120.5-32.5T678-678m137-136q-18-18-31-41t-18-48q-4-16 8-28t30-12q17 0 30 12t21 26q2 8 7 16t12 15q6 7 14 12.5t18 7.5q14 9 26 22t12 30q0 18-12 30.5t-28 7.5q-25-5-48-18t-41-32M385-467q-77 0-126-49.5T210-643q0-77 49-126t126-49q77 0 126.5 49T561-643q0 77-49 126.5T385-467M40-191v-25q0-49 26-81t56-47q51-26 126-44t137-18q62 0 136.5 17.5T647-346q30 16 57 48.5t27 81.5v25q0 40-27.5 67.5T636-96H134q-40 0-67-27.5T40-191" />
  </Svg>
);
