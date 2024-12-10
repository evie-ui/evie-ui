import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgQuickReorder = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M62-112q-19.75 0-33.375-13.675Q15-139.351 15-159.175 15-179 28.625-193 42.25-207 62-207h152v-74H102q-19.75 0-33.375-13.675Q55-308.351 55-328.175 55-348 68.625-361.5 82.25-375 102-375h112v-75h-66q-19.75 0-33.375-13.675Q101-477.351 101-497.175 101-517 114.625-530.5 128.25-544 148-544h66v-132l-67-158q-8-18-1-35.5t26-26.5q17-8 35-1t26 25l82 192h486l-68-153q-9-18-1.5-36t25.5-27q18-8 36-.5t26 24.5l79 173q3 9 5.5 19.5T906-660v453q0 39.75-27.625 67.375T811-112zm411-308h174q15.75 0 25.875-10.175 10.125-10.176 10.125-26Q683-471 672.375-481T647-491H473q-14.75 0-25.375 10.175-10.625 10.176-10.625 25Q437-440 447.125-430T473-420M308-207h503v-379H308zm0 0v-379z" />
  </Svg>
);
