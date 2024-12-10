import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStockpotFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M256-135q-66.333 0-113.667-47.625Q95-230.25 95-297v-298q0-20.175 13.625-34.088Q122.25-643 142-643h675q20.05 0 34.525 13.912Q866-615.175 866-595v298q0 66.75-47.625 114.375T704-135zm100-644v-39q0-19.625 13.4-33.812Q382.8-866 402-866h155q19.75 0 33.375 14.188Q604-837.625 604-818v39h214q19.625 0 33.812 13.675 14.188 13.676 14.188 34Q866-711 851.525-697 837.05-683 817-683H142q-19.75 0-33.375-13.877T95-731.377Q95-752 108.912-765.5 122.825-779 143-779z" />
  </Svg>
);
