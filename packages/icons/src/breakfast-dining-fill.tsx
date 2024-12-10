import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBreakfastDiningFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M230-95q-36 0-60.5-24.5T145-180v-356q-40-24-65-61.5T55-691q0-74 49.5-124.5T228-866h504q74 0 124 50.5T906-691q0 56-25 93.5T817-536v356q0 36-25 60.5T731-95zm222-147q13 12 28.5 12t28.5-12l170-170q12-13 12-28.5T679-469L509-639q-11-11-28.5-11T452-639L282-469q-12 13-12 28.5t12 28.5zm28-72L356-438l124-124 124 124z" />
  </Svg>
);
