import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRememberMe = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M271-17q-38.775 0-66.388-27.612Q177-72.225 177-111v-738q0-38.775 27.612-66.387Q232.225-943 271-943h418q38.775 0 66.387 27.613Q783-887.775 783-849v738q0 38.775-27.613 66.388Q727.775-17 689-17zm0-124v30h418v-30zm0-678h418v-30H271zm209 519q-55.538 0-108.269 16Q319-268 271-242v41h418v-41q-48-26-100.038-42Q536.923-300 480-300m0-60q55.394 0 107.697 13.5Q640-333 689-308v-451H271v451q50-25 101.803-38.5T480-360m.765-57Q529-417 563-450.765q34-33.764 34-82Q597-581 563.235-615q-33.764-34-82-34Q433-649 399-615.235q-34 33.764-34 82Q365-485 398.765-451q33.764 34 82 34m.235-60q-23 0-39.5-16.5T425-533q0-23 16.5-39.5T481-589q23 0 39.5 16.5T537-533q0 23-16.5 39.5T481-477m-.5 276H689 271zm-.5 60" />
  </Svg>
);
