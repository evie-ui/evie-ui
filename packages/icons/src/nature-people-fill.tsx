import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNaturePeopleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M135-508q-23 0-39-16.5T80-563q0-22 16-38t39-16q21 0 37.5 16t16.5 38q0 22-16.5 38.5T135-508m55 368h389v-250h-64q-75 0-128.5-51.5T333-566q0-51 27.5-97t80.5-68q11-74 64.5-120.5T629-898q71 0 124 46.5T818-731q52 22 80 68t28 97q0 73-54 124.5T743-390h-70v250h164q20 0 33.5 13.5T884-93q0 20-13.5 33.5T837-46H127q-20 0-33.5-13.5T80-93v-178H70q-20 8-28-5.5T34-306v-127q0-18 15-31t36-13h100q21 0 35.5 13t14.5 31v126q0 16-8.5 30t-27.5 6h-9z" />
  </Svg>
);