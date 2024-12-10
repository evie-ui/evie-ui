import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMailLockFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-518 203-696q-17-11-35.5-1.199T149-666.21q0 9.46 4.5 16.335T165-638l289 190q11.75 8 25.875 8T506-448l289-190q7-5 11.5-11.818t4.5-15.796q0-21.284-18.5-31.335Q774-707 757-696zm293 383q-14 0-24.5-10T738-170v-120q0-14.875 12-24.938Q762-325 778-325v-45q0-29.938 22.044-52.469 22.045-22.531 53-22.531Q884-445 906-422.469q22 22.531 22 52.469v45q16 0 28 10.062 12 10.063 12 24.938v120q0 15-10 25t-25 10zm35-190h90v-44.912Q898-388 885.088-401.5q-12.913-13.5-32-13.5Q834-415 821-401.562 808-388.125 808-370zM152-135q-39.988 0-68.494-27T55-229v-502q0-40.213 27.1-67.606Q109.2-826 149-826h662q40.213 0 67.606 27.394Q906-771.213 906-731v226h-48q-73.578 0-126.642 53.15Q678.294-398.7 678.294-325v190z" />
  </Svg>
);
