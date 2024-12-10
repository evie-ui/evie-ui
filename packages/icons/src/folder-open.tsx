import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFolderOpen = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-38.05 0-66.025-27.975Q55-190.95 55-229v-502q0-39.463 27.975-67.231Q110.95-826 149-826h222q18.689 0 36.344 8 17.656 8 30.744 21.088L481.454-754H811q39.463 0 67.231 27.975Q906-698.05 906-660H441l-71-71H149v506l79-307q9-31 33.71-49.5T319-600h516q46 0 75 38t15 84l-64 252q-15 50-44.5 70.5T735-135zm101-94h513l67-276H317zM149-532v-199zm101 303 67-276z" />
  </Svg>
);
