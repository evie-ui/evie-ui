import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlignVerticalCenter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M333.882-95q-27.965 0-47.424-19.542Q267-134.083 267-162v-271H102q-19.75 0-33.375-13.675Q55-460.351 55-480.175 55-500 68.625-513.5 82.25-527 102-527h165v-271q0-28.333 19.576-48.167Q306.152-866 334.118-866q27.965 0 47.424 19.833Q401-826.333 401-798v271h158v-151q0-28.333 19.576-48.167Q598.152-746 626.118-746q27.965 0 47.424 19.833Q693-706.333 693-678v151h165q19.625 0 33.812 13.675Q906-499.649 906-479.825 906-460 891.812-446.5 877.625-433 858-433H693v151q0 27.917-19.576 47.458Q653.848-215 625.882-215q-27.965 0-47.424-19.542Q559-254.083 559-282v-151H401v271q0 27.917-19.576 47.458Q361.848-95 333.882-95" />
  </Svg>
);
