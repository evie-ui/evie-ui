import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPartyModeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-95q-39 0-66.5-27.5T55-189v-495q0-38 27.5-66.5T149-779h125l56-60q13-14 30-20.5t36-6.5h169q18 0 35 6.5t30 20.5l57 60h124q38 0 66.5 28.5T906-684v495q0 39-28.5 66.5T811-95zm331-171q72 0 121-50.5T650-440q0-5-.5-8t-2.5-8h-71q-1 5 1 8t2 8q0 39-30 71t-69 32H344q17 29 52.5 50t83.5 21M310-416h66q1-5 3-12t2-12q0-39 30-67t69-28h138q-21-29-55.5-50T480-606q-73 0-121.5 47T310-440q0 5 .5 12t-.5 12" />
  </Svg>
);
