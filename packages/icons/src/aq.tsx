import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAq = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M670-262q-84 0-142-58t-58-142q0-82 57.5-140.5T668-661q83 0 140.5 58.5T866-462q0 41-15.5 78.5T805-318l12 17q7 10 5 22.5T809.471-258Q798-250 784-251.5T764-265l-11-17q-19.713 10-40.463 15T670-262m-474-91-20.897 59.7Q171-283 162.438-277q-8.563 6-18.438 6-17.889 0-27.944-14.718Q106-300.436 112-316l114.599-311.883Q230.615-639 240.658-646t23.091-7h29.117q12.048 0 22.091 7 10.043 7 14.095 18.088L446-321q6 17.923-5.288 33.962Q429.423-271 410-271q-12.036 0-21.679-6.95Q378.679-284.9 375-296l-20.637-57zm472.211 22Q680-331 691-332.5q11-1.5 23-6.5l-19-30q-7-11-5-24t13-20.5q11-6.5 24-4t20 13.5l18 26q15-18 23-39.744t8-44.551Q796-516 758.983-554.5q-37.016-38.5-91-38.5Q614-593 577-554.321 540-515.642 540-462q0 54.642 37.084 92.821Q614.169-331 668.211-331M219-418h112l-53.564-150H273z" />
  </Svg>
);
