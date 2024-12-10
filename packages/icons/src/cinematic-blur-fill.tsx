import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCinematicBlurFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m149-866 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h94q39.463 0 67.231 27.769Q906-810.463 906-771v582q0 39.05-27.769 66.525Q850.463-95 811-95H149q-39.05 0-66.525-26.5Q55-148 55-187v-584q0-39.463 27.475-67.231Q109.95-866 149-866m186 617h290v-40q0-36.347-38.5-56.673Q548-366 480-366t-106.5 20.327Q335-325.347 335-289zm145.212-177Q508-426 527.5-445.089q19.5-19.088 19.5-47.5Q547-521 527.58-540q-19.421-19-47.5-19Q452-559 433-539.824t-19 46.913Q414-464 433.212-445q19.213 19 47 19" />
  </Svg>
);
