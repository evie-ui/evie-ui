import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMobileFriendly = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M231-17q-38.775 0-66.388-27.612Q137-72.225 137-111v-738q0-38.775 27.612-66.387Q192.225-943 231-943h418q38.775 0 66.387 27.613Q743-887.775 743-849v135h-94v-45H231v558h418v-45h94v135q0 38.775-27.613 66.388Q687.775-17 649-17zm0-124v30h418v-30zm397-302 199-199q14-13 31.5-13t31 14q13.5 14 13.5 31.5T890-579L662-350q-14.727 14-34.364 14Q608-336 594-350L478-468q-14-13-13-30.611T479-530q13.778-13 30.889-13Q527-543 541-530zM231-819h418v-30H231zm0 0v-30zm0 678v30z" />
  </Svg>
);
