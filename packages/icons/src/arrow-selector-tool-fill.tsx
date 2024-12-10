import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowSelectorToolFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M630-51q-24 11-48 2t-35-33L414-365 296-201q-20 29-52 18t-32-46v-614q0-30 26.5-43t49.5 5l482 377q26 22 15 54t-45 32H530l131 283q11 24 2 48.5T630-51" />
  </Svg>
);
