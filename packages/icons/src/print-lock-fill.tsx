import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPrintLockFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M711-82q-15 0-25-10t-10-25v-120q0-14 11.5-24.5T716-272v-45q0-30.938 22.044-52.969 22.045-22.031 53-22.031Q821-392 843.5-369.969 866-347.938 866-317v45q16 0 28 10.5t12 24.5v120q0 15-10.5 25T871-82zm35-190h90v-44.912Q836-336 822.588-349q-13.413-13-32-13Q772-362 759-349.062 746-336.125 746-317zM264-82q-19.75 0-33.375-13.625T217-129v-146H102q-19.75 0-33.375-13.625T55-322v-220q0-54.65 37.208-93.325Q129.417-674 184-674h592q55.25 0 92.625 38.675T906-542v91q-33-23-67.866-34.5T763.036-497Q677-497 612.5-442T536-305H311v134h230.602Q551-145 565-122.5T599-82zm-47-622v-67q0-40.213 27.1-67.606Q271.2-866 311-866h338q40.213 0 67.606 27.394Q744-811.213 744-771v67z" />
  </Svg>
);