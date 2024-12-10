import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCreditScore = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-642h662v-89H149zm-94-89q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v228H149v274h189q19.75 0 33.375 13.675Q385-201.649 385-181.825 385-162 371.375-148.5 357.75-135 338-135H149q-39.05 0-66.525-27.475Q55-189.95 55-229zm94 0v502-112.009V-266zm460 550 200-199q13.067-13 31.533-13 18.467 0 31.424 13 13.293 13 13.168 31.5T872-317L643-88q-14.455 14-33.727 14Q590-74 576-88L460-205q-14-14-13.5-32.5t14.714-31.891Q473.911-283 492.455-282.5 511-282 525-268z" />
  </Svg>
);
