import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSpeakerNotesOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m215-215-79 79q-23 23-52 11.344T55-168v-662h87l307 307H349L43-829q-10-9.822-10-23.911Q33-867 43.5-878q10.5-11 25-11.5T94-879L886-87q11 11 10 25.5T885-37q-11 11-25 11t-25-11L658-215zm630-15L541-533h155q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T696-593H481l-60-60h275q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T696-713H411q-9.75 0-17.875 5.625T383-693v2L168-906h642q38 0 66.5 28.5T905-811v502q0 31-17.5 54T845-230M273-403q17 0 28.5-11.5T313-443q0-17-11.5-28.5T273-483q-17 0-28.5 11.5T233-443q0 17 11.5 28.5T273-403m0-120q17 0 28.5-11.5T313-563q0-17-11.5-28.5T273-603q-17 0-28.5 11.5T233-563q0 17 11.5 28.5T273-523" />
  </Svg>
);