import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCloudySnowing = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M240-168q-21.5 0-35.75-14.25T190-217.5q0-21 14.25-35.75T240-268q21.5 0 35.75 14.812Q290-238.375 290-218q0 21.5-14.25 35.75T240-168m480 0q-21.5 0-35.75-14.25T670-217.5q0-21 14.25-35.75T720-268q21.5 0 35.75 14.812Q770-238.375 770-218q0 21.5-14.25 35.75T720-168M360-14q-21.5 0-35.75-14.25T310-63.5q0-21 14.25-35.75T360-114q21.5 0 35.75 14.813Q410-84.376 410-64q0 21.5-14.25 35.75T360-14m120-154q-21.5 0-35.75-14.25T430-217.5q0-21 14.25-35.75T480-268q21.5 0 35.75 14.812Q530-238.375 530-218q0 21.5-14.25 35.75T480-168M600-14q-21.5 0-35.75-14.25T550-63.5q0-21 14.25-35.75T600-114q21.5 0 35.75 14.813Q650-84.376 650-64q0 21.5-14.25 35.75T600-14M290-334q-93.382 0-160.191-67.02T63-560.835Q63-645 121-711q58-66 145-75 35.358-56 90.744-89.5T480.191-909Q573-909 638-851t84 144q82 8 128.5 61.472T897-521.865Q897-444 842.458-389 787.917-334 710-334zm0-95h420q39.06 0 66.03-26.761 26.97-26.76 26.97-65.5Q803-560 776.03-587q-26.97-27-66.03-27h-77v-47q0-63.987-44.484-108.494Q544.033-814 480.289-814q-46.191 0-84.4 24.812Q357.68-764.375 340-723l-12.286 29H289q-55.391 1.752-93.696 40.131Q157-615.49 157-561.476q0 54.547 38.693 93.512Q234.386-429 290-429m190-192" />
  </Svg>
);
