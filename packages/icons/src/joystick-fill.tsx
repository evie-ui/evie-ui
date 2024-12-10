import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgJoystickFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-635v-29q-44-15-72-52.492-28-37.491-28-86.508 0-60.857 42.601-103.929Q418.202-950 480.101-950T584.5-906.929Q627-863.857 627-803q0 49.017-28 86.508Q571-679 527-664v29l291 168q23.25 13.171 35.625 34.914Q866-410.343 866-385v89q0 25.343-12.375 47.086T818-214L527-46q-22.328 13-47.164 13Q455-33 433-46L142-214q-23.25-13.171-35.125-34.914Q95-270.657 95-296v-89q0-25.343 11.875-47.086T142-467zM257-433l223 129 223-130-176-101v97h-94v-97z" />
  </Svg>
);
