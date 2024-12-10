import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSendToMobile = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M726-451H510q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T510-511h216l-61-60q-9-8.25-9-20.625T665-613q9-9 21-9t21 9l98 98q14 14.727 14 34.364Q819-461 805-447l-98 98q-8.25 8.25-20.625 8.625T665-349q-9-9-9-21t9-21zM271-17q-38.775 0-66.388-27.612Q177-72.225 177-111v-738q0-38.775 27.612-66.387Q232.225-943 271-943h418q38.775 0 66.387 27.613Q783-887.775 783-849v135h-94v-45H271v558h418v-45h94v135q0 38.775-27.613 66.388Q727.775-17 689-17zm0-124v30h418v-30zm0-678h418v-30H271zm0 0v-30zm0 678v30z" />
  </Svg>
);
