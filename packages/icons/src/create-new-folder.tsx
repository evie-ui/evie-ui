import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCreateNewFolder = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18.689 0 36.344 8 17.656 8 30.744 21.088L481.454-754H811q38.463 0 66.731 27.975Q906-698.05 906-660v431q0 38.05-28.269 66.025Q849.463-135 811-135zm0-94h662v-431H442l-71-71H149zm0 0v-502zm399-169v62.596q0 15.554 9.975 25.979Q567.951-299 583.675-299q15.725 0 26.025-9.925 10.3-9.925 10.3-25.777V-398h64.912q14.838 0 25.463-9.975Q721-417.951 721-434.175q0-16.225-9.925-26.025Q701.15-470 685-470h-65v-63.5q0-15.513-10.4-26.006Q599.199-570 583.825-570q-16.225 0-26.025 10.494-9.8 10.493-9.8 26.006v63.5h-65.018q-15.732 0-25.857 9.975Q447-450.049 447-433.825q0 16.225 9.925 26.025Q466.85-398 483-398z" />
  </Svg>
);
