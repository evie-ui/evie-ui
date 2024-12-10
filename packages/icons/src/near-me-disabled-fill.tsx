import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNearMeDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M490-109 380-394 95-504q-15-6-22.5-18.5T65-549q0-14 7.5-25.5T95-593l216-81-200-200q-10-10-10.5-24.5T111-924q11-11 25.5-11t25.5 11l762 762q10 10 10 25t-10 25q-11 11-25 11t-25-11L660-324l-81 215q-6 16-17.5 23T536-79q-15 0-27.5-7T490-109m227-361L456-730l324-125q14-6 27-2t23 13q9 10 13 23t-2 27z" />
  </Svg>
);
