import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPhotoCameraBack = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-495q0-38.463 27.475-66.731Q109.95-779 149-779h125l56-60q13-14 30-20.5t36-6.5h169q17.875 0 34.938 6.5Q617-853 630-839l57 60h124q38.463 0 66.731 28.269Q906-722.463 906-684v495q0 39.05-28.269 66.525Q849.463-95 811-95zm0-94h662v-495H647l-81-87H396l-85 87H149zm133-65h403q14 0 21-12.625T703-292L590-440q-8-9-19-9t-19 10L445-298l-73-90q-8.308-9-19.154-9T334-388l-71 96q-9 12.75-2.5 25.375T282-254" />
  </Svg>
);