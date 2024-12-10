import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMobileFriendlyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M231-17q-39.025 0-66.513-27.487Q137-71.975 137-111v-738q0-39.025 27.487-66.512Q191.975-943 231-943h418q39.025 0 66.512 27.488Q743-888.025 743-849v135h-94v-45H231v558h418v-45h94v135q0 39.025-27.488 66.513Q688.025-17 649-17zm397-426 199-199q14-13 31.5-13t31 14q13.5 14 13.5 31.5T890-579L662-350q-14.727 14-34.364 14Q608-336 594-350L478-468q-14-13-13-30.611T479-530q13.778-13 30.889-13Q527-543 541-530z" />
  </Svg>
);
