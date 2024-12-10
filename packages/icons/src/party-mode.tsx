import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPartyMode = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-495q0-38.463 27.475-66.731Q109.95-779 149-779h125l56-60q13-14 30-20.5t36-6.5h169q17.875 0 34.938 6.5Q617-853 630-839l57 60h124q38.463 0 66.731 28.269Q906-722.463 906-684v495q0 39.05-28.269 66.525Q849.463-95 811-95zm0-94h662v-495H647l-81-87H396l-85 87H149zm331-77q72 0 121-50.5T650-440q0-5-.5-8t-2.5-8h-71q-1 5.081 1 8.161 2 3.081 2 8.162Q579-401 548.84-369q-30.16 32-68.84 32H344q17 29 52.5 50t83.5 21M309.9-416H376q1-5 3-12t2-12.213Q381-479 411-507q30-28 69-28h138q-21-29-55.5-50T480-606q-73 0-121.5 47T310-440q0 5 .475 12t-.575 12" />
  </Svg>
);
