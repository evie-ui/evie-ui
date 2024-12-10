import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPipExit = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-134q-39.05 0-66.525-27.475Q55-188.95 55-228v-273q0-19.75 13.675-33.375Q82.351-548 102.175-548 122-548 135.5-534.375 149-520.75 149-501v273h662v-502H464q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q417-798 430.625-811.5 444.25-825 464-825h347q39.463 0 67.231 27.769Q906-769.463 906-730v502q0 39.05-27.769 66.525Q850.463-134 811-134zm409-291 113 113q11.909 12 27.455 12Q714-300 726-312.211q12-12.21 12-28.5Q738-357 726-369L614-481h67q16.475 0 28.237-11.868Q721-504.737 721-521.368 721-538 709.237-549.5 697.475-561 681-561H526q-19.75 0-33.375 14.188Q479-532.625 479-513v154q0 16.475 11.813 28.237Q502.626-319 519.175-319q16.125 0 27.475-11.763Q558-342.525 558-359zM102-608q-19.75 0-33.375-13.625T55-655v-123q0-19.625 13.625-33.812Q82.25-826 102-826h208q19.75 0 33.375 14.188Q357-797.625 357-778v123q0 19.75-13.625 33.375T310-608zm378 129" />
  </Svg>
);
