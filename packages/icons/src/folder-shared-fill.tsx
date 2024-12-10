import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFolderSharedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18 0 36 8t31 21l43.454 43H811q38.463 0 66.731 27.975Q906-698.05 906-660v431q0 38.05-28.269 66.025Q849.463-135 811-135zm290-157h320v-4q0-41-42.5-68T599-391q-75 0-117.5 27T439-296zm160-159q30 0 51.5-21t21.5-52q0-30-21.5-51.5T599-597q-30 0-51.5 21.5T526-524q0 31 21.5 52t51.5 21" />
  </Svg>
);
