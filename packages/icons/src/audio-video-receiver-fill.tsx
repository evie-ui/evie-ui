import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAudioVideoReceiverFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M213-172q-18 0-31-13t-13-31v-50h-20q-39 0-66.5-27.475T55-360v-320q0-39.05 27.475-66.525Q109.95-774 149-774h662q39.463 0 67.231 27.475Q906-719.05 906-680v320q0 39.05-27.769 66.525Q850.463-266 811-266h-20v50q0 18-12.562 31-12.563 13-30.438 13-18 0-31-13t-13-31v-50H256v50q0 18-12.562 31-12.563 13-30.438 13m463.336-251Q717-423 745.5-451.237 774-479.475 774-520q0-40.525-28.5-68.763Q717-617 676.336-617q-40.663 0-69 28.237Q579-560.525 579-520q0 40.525 28.336 68.763 28.337 28.237 69 28.237M259-423h228q20 0 33.5-13.5T534-470v-100q0-20-13.5-33.5T487-617H259q-20 0-33.5 13.5T212-570v100q0 20 13.5 33.5T259-423" />
  </Svg>
);
