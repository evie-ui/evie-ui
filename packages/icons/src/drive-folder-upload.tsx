import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDriveFolderUpload = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18.689 0 36.344 8 17.656 8 30.744 21.088L481.454-754H811q38.463 0 66.731 27.975Q906-698.05 906-660v431q0 38.05-28.269 66.025Q849.463-135 811-135zm0-94h662v-431H442l-71-71H149zm0 0v-502zm331.368-47Q497-276 508.5-287.125T520-315v-140l26 26q11 11 25.5 11t27.5-14q12-11 12-26.867 0-15.866-12-28.133l-85-85q-14.727-14-34.364-14Q460-586 446-572l-85 85q-12 12.267-12 28.133Q349-443 363-429q11.511 11 25.756 11Q403-418 414-429l26-26v140q0 16.75 11.868 27.875Q463.737-276 480.368-276" />
  </Svg>
);
