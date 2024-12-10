import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInfoI = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.911-691q-36.436 0-61.674-25.326Q393-741.652 393-778.089q0-36.849 25.326-62.38Q443.652-866 480.089-866q36.436 0 61.674 25.633Q567-814.734 567-777.867 567-741 541.674-716t-61.763 25m-.029 596q-27.965 0-47.424-19.542Q413-134.083 413-162v-362q0-27.917 19.576-47.458Q452.152-591 480.118-591q27.965 0 47.424 19.542Q547-551.917 547-524v362q0 27.917-19.576 47.458Q507.848-95 479.882-95" />
  </Svg>
);
