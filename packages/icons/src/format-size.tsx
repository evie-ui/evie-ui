import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatSize = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M571-702H421q-26.5 0-44.25-17.853T359-763.882q0-26.177 17.75-44.147Q394.5-826 421-826h423q25.833 0 43.917 18.323Q906-789.353 906-763.176 906-737 887.917-719.5 869.833-702 844-702H694v506q0 26.167-17.382 43.583Q659.235-135 633.353-135t-44.118-17.75Q571-170.5 571-197zM185-478h-69q-26.167 0-43.583-17.853Q55-513.706 55-539.882q0-26.177 17.417-43.647Q89.833-601 116-601h262q26.167 0 43.583 17.588Q439-565.824 439-539.647q0 26.176-17.417 43.912Q404.167-478 378-478h-69v282q0 26.167-18.118 43.583-18.117 17.417-44 17.417Q221-135 203-152.75 185-170.5 185-197z" />
  </Svg>
);
