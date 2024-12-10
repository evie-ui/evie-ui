import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextRotationDownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m262-260 24-24q12-12 28.5-11.5T343-283q13 12 13 28.5T343-225l-89 88q-14 15-34 15t-34-15l-89-88q-12-12-12-29.5T98-284q11-11 28.5-11t29.5 12l23 23v-509q0-18 12-30t30-12q18 0 29.5 12t11.5 30zm265-133v-174l-68-23q-12-4-19.5-14t-7.5-23q0-20 17.5-32t37.5-5l358 133q12 5 19.5 15.5T872-492v32q0 13-7.5 23.5T845-420L489-289q-21 8-39-4.5T432-328q0-15 8.5-25.5T462-369zm63-15 200-69v-4l-200-69z" />
  </Svg>
);
