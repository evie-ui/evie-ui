import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBolt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m404-181 265-321H497l33-264-241 347h149zm-66-151H213q-28.872 0-42.436-25T174-406l376-542q10-14 25-18.5t30 1.5q15 5 24 19.67 9 14.67 7 30.33l-41 326h159q30.362 0 42.681 27Q809-535 791-512L381-18Q370.558-5.095 355.279-1.548 340 2 325-5.25q-14-6.25-21.5-19.625T298-55zm140-140" />
  </Svg>
);
