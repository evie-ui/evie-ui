import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgApartmentFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M180-86q-39.8 0-66.9-27.1Q86-140.2 86-180v-435q0-40.213 27.1-67.606Q140.2-710 180-710h71v-70q0-40.213 27.1-67.606Q305.2-875 345-875h270q40.213 0 67.606 27.394Q710-820.213 710-780v235h70q40.213 0 67.606 27.394Q875-490.212 875-450v270q0 39.8-27.394 66.9Q820.213-86 780-86H533v-199H427v199zm0-94h105v-105H180zm0-165h105v-105H180zm0-165h105v-105H180zm165 165h105v-105H345zm0-165h105v-105H345zm0-165h105v-105H345zm165 330h105v-105H510zm0-165h105v-105H510zm0-165h105v-105H510zm165 495h105v-105H675zm0-165h105v-105H675z" />
  </Svg>
);
