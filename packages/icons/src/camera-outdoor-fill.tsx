import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCameraOutdoorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-95q-40.05 0-67.025-26.975Q135-148.95 135-189v-377q0-21.786 9.672-41.752Q154.344-627.719 172-641l251-189q25-19 57-19t57 19l251 189q18.125 13.281 28.062 33.248Q826-587.786 826-566v81H536q-26.763 0-44.881 18.412Q473-448.175 473-422v170q0 25.762 18.119 44.381Q509.237-189 535.725-189H778q19.875 0 33.938 13.5Q826-162 826-142t-14.062 33.5Q797.875-95 778-95zm307-122q-15 0-25-10t-10-25v-170q0-14 10-24.5t25-10.5h175q14 0 24.5 10.5T746-422v55l45-26q12-7 23.5-.543Q826-387.087 826-373v72q0 14.087-11.5 20.543Q803-274 791-281l-45-26v55q0 15-10.5 25T711-217z" />
  </Svg>
);
