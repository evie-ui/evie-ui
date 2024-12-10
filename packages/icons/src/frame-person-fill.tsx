import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFramePersonFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.105-480Q427-480 390-517q-37-37-37-91 0-52 37.188-89.5t89.988-37.5Q533-735 570.5-697.5T608-608q0 54-37.386 91t-90.509 37M233-280v-36.105q0-29.286 18.462-51.25Q269.923-389.319 296-404q43.82-22 90.064-33 46.245-11 94.09-11Q528-448 574.5-437q46.5 11 89.5 33 26 14 45 36.362 19 22.362 19 51.533V-280q0 19.75-14.188 33.375Q699.625-233 680-233H280q-19.75 0-33.375-13.625T233-280M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-116q0-19.75 13.675-33.375Q82.351-312 102.175-312 122-312 135.5-298.375 149-284.75 149-265v116h116q19.75 0 33.375 13.675Q312-121.649 312-101.825 312-82 298.375-68.5 284.75-55 265-55zM55-695v-116q0-39.463 27.475-67.231Q109.95-906 149-906h116q19.75 0 33.375 14.263t13.625 34Q312-838 298.375-824.5 284.75-811 265-811H149v116q0 19.75-13.675 33.375Q121.649-648 101.825-648 82-648 68.5-661.625 55-675.25 55-695M811-55H695q-19.75 0-33.375-13.675Q648-82.351 648-102.175 648-122 661.625-135.5 675.25-149 695-149h116v-116q0-19.75 13.675-33.375Q838.351-312 858.088-312q19.737 0 33.824 13.625Q906-284.75 906-265v116q0 39.05-27.769 66.525Q850.463-55 811-55m0-640v-116H695q-19.75 0-33.375-13.675Q648-838.351 648-858.088q0-19.737 13.625-33.824Q675.25-906 695-906h116q39.463 0 67.231 27.769Q906-850.463 906-811v116q0 19.75-14.263 33.375t-34 13.625Q838-648 824.5-661.625 811-675.25 811-695" />
  </Svg>
);