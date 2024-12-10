import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStackOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m906-168-87-86v-301H518l-87-87h380q39.188 0 67.094 27.906Q906-586.188 906-547zM253-819l-87-87h380q39.188 0 67.094 27.906Q641-850.188 641-811v109h-87v-117zm153 677h324L406-466zm7 87q-39.4 0-66.7-27.3Q319-109.6 319-149v-403L140-730v324h119v87H148q-39.4 0-66.7-27.3Q54-373.6 54-413v-404l-13.75-12.946Q30-840.16 30-855.08T40.947-881q10.414-10 24.734-10Q80-891 91-881L893-79q10 10 10 24.5T892.053-29q-10.414 10-24.734 10Q853-19 841.878-29.4L817-55zm155-249" />
  </Svg>
);
