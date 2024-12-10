import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPrintAdd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-579h661zm68 450v-146H102q-19.75 0-33.375-13.625T55-322v-220q0-54.65 37.167-93.325Q129.333-674 184-674h592q55.075 0 92.537 38.675Q906-596.65 906-542v91q-21-15-45-25t-51-15.5V-549q-1-12.55-11.225-21.275Q788.55-579 776-579H184q-14.55 0-24.775 10.725Q149-557.55 149-542v172h68v-16q0-5.875 4.062-9.938Q225.125-400 231-400h344q-15.095 21.14-24.548 44.57Q541-332 536-305H311v134h230.602Q551-145 565-122.5T599-82H264q-19.75 0-33.375-13.625T217-129m0-545v-97q0-40.213 27.1-67.606Q271.2-866 311-866h338q40.213 0 67.606 27.394Q744-811.213 744-771v97h-95v-97H311v97zm499 471h-73q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q596-271 609.625-284.5 623.25-298 643-298h73v-73q0-19.75 13.675-33.375Q743.351-418 763.175-418 783-418 796.5-404.375 810-390.75 810-371v73h73q19.75 0 33.375 13.675 13.625 13.676 13.625 34Q930-230 916.375-216.5 902.75-203 883-203h-73v72q0 20.75-13.675 34.375Q782.649-83 762.825-83 743-83 729.5-96.625 716-110.25 716-131z" />
  </Svg>
);