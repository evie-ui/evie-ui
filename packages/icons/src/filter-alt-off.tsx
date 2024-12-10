import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFilterAltOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m603-454-67-68 165-209H326l-94-95h540q38 0 54 33t-7 63zm-17 169v85q0 27-19.5 46T520-135h-80q-27 0-46-19t-19-46v-296L54-817q-11-11-11.5-25.5T54-868q10-11 24.5-11t25.5 11l763 763q10 10 11 24.5T868-55q-11 11-25.5 11T817-55zm-50-237" />
  </Svg>
);
