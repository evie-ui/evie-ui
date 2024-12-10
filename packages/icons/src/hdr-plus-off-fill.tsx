import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHdrPlusOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M577-532h86v-145h-86zM329-317h94v-65h-94zm-43 127h43v-84.143h54L416-190h43l-33-84h19l21-22.192v-107.616L445-425H286zm0-293h45v-88l-45-45zM480-55q-88.074 0-165.537-33Q237-121 179-179T88-314.463Q55-391.926 55-480q0-92.07 34-171.535T177-772l592 592q-45 62-126 93.5T480-55m349 35L20-829l51-51L880-71zm-5-208L565-487h122l21-22.125v-191.75L687-722H532v202l-59-60v-142h-45v98L228-825.497Q278-863 343.5-884.5T480-906q88.227 0 165.823 33.37 77.597 33.37 135.517 91.29 57.92 57.92 91.29 135.517Q906-568.227 906-480q0 74-22 137.5T824-228" />
  </Svg>
);
