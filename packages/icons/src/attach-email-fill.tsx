import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAttachEmailFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M114-215q-40 0-68.5-27T17-309v-502q0-40.463 27.5-67.731Q72-906 111-906h662q40.463 0 67.731 27.269Q868-851.463 868-811v265H731q-48.343 0-80.171 36Q619-474 619-424v209zm328-383L165-776q-17-11-35.5-1.25T111-746q0 9.25 4.5 16.125T127-718l290 190q12.438 8 25.719 8T468-528l290-190q6-5.49 10.5-12.224 4.5-6.735 4.5-15.817Q773-767 755-777t-36 1zM798-47q-63 0-106-45t-43-108v-224q0-37.74 26.979-64.87 26.979-27.13 65.5-27.13Q779-516 805-488.87T831-424v193.892Q831-214 821.105-204q-9.894 10-25 10Q781-194 770.5-204.425T760-230v-197q0-11-4.5-19.5T741-455q-10 0-15.5 8.5T720-427v229q0 36.175 21.376 62.587Q762.752-109 797.876-109 831-109 851-134.5t20-59.5v-167q0-15.15 10.425-25.575Q891.85-397 907-397q16 0 26 10.425T943-361v167q0 61-42 104T798-47" />
  </Svg>
);
