import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPhonelinkEraseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m692-439-91 91q-9 9-21 9t-21-9q-9-9-9-21t9-21l91-91-91-91q-9-9-9-21t9-21q9-9 21-9t21 9l91 91 91-91q9-9 21-9t21 9q9 9 9 21t-9 21l-91 91 91 91q9 9 9 21t-9 21q-9 9-21 9t-21-9zM231-17q-39.025 0-66.513-27.487Q137-71.975 137-111v-738q0-39.025 27.487-66.512Q191.975-943 231-943h418q39.025 0 66.512 27.488Q743-888.025 743-849v135h-94v-45H231v558h418v-45h94v135q0 39.025-27.488 66.513Q688.025-17 649-17z" />
  </Svg>
);
